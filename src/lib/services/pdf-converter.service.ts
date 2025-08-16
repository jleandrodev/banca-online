import type { Browser } from 'puppeteer';
import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';

export class PdfConverterService {
  private browser: Browser | null = null;

  /**
   * Inicializar o browser (reutilizar instância)
   */
  private async getBrowser(): Promise<Browser> {
    if (!this.browser) {
      this.browser = await puppeteer.launch({
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--no-zygote',
          '--disable-gpu',
        ],
      });
    }
    return this.browser;
  }

  /**
   * Converter primeira página do PDF para imagem PNG
   */
  async convertFirstPageToImage(pdfBuffer: ArrayBuffer | Uint8Array): Promise<Buffer> {
    try {
      // Carregar o PDF
      const pdfDoc = await PDFDocument.load(pdfBuffer);
      const pages = pdfDoc.getPages();

      if (pages.length === 0) {
        throw new Error('PDF não possui páginas');
      }

      // Criar um novo PDF com apenas a primeira página
      const singlePagePdf = await PDFDocument.create();
      const [copiedPage] = await singlePagePdf.copyPages(pdfDoc, [0]);
      singlePagePdf.addPage(copiedPage);

      // Converter para bytes
      const pdfBytes = await singlePagePdf.save();
      const pdfBase64 = Buffer.from(pdfBytes).toString('base64');

      // Usar Puppeteer para renderizar o PDF
      const browser = await this.getBrowser();
      const page = await browser.newPage();

      // Configurar viewport para uma resolução adequada
      await page.setViewport({
        width: 800,
        height: 1000,
        deviceScaleFactor: 2, // Para melhor qualidade
      });

      // Carregar o PDF como data URL
      const dataUrl = `data:application/pdf;base64,${pdfBase64}`;
      await page.goto(dataUrl, { waitUntil: 'networkidle0' });

      // Capturar screenshot da primeira página
      const screenshot = await page.screenshot({
        type: 'png',
        fullPage: false,
        omitBackground: false,
      });

      await page.close();

      return screenshot as Buffer;
    } catch (error) {
      console.error('Erro ao converter PDF para imagem:', error);
      throw new Error(`Falha na conversão: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  }

  /**
   * Fechar o browser (chamar no final da aplicação)
   */
  async closeBrowser(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }

  /**
   * Verificar se o serviço está funcionando
   */
  async testConversion(): Promise<boolean> {
    try {
      // Criar um PDF de teste simples
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([400, 600]);

      page.drawText('Teste de Conversão', {
        x: 50,
        y: 550,
        size: 20,
      });

      const pdfBytes = await pdfDoc.save();
      const imageBuffer = await this.convertFirstPageToImage(pdfBytes);

      return imageBuffer.length > 0;
    } catch (error) {
      console.error('Teste de conversão falhou:', error);
      return false;
    }
  }
}
