require('dotenv').config();
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

console.log('🧪 Testando upload em lote completo...\n');

async function testBatchUpload() {
  try {
    // Verificar se o arquivo ZIP de teste existe
    const zipPath = path.join(__dirname, 'test-ebooks.zip');
    if (!fs.existsSync(zipPath)) {
      console.log('❌ Arquivo ZIP de teste não encontrado');
      console.log('💡 Execute primeiro: npm run test:create-zip');
      return;
    }

    console.log('📦 Arquivo ZIP encontrado:', zipPath);
    console.log('📊 Tamanho:', (fs.statSync(zipPath).size / 1024 / 1024).toFixed(2), 'MB');

    // Criar FormData
    const formData = new FormData();
    formData.append('zipFile', fs.createReadStream(zipPath), {
      filename: 'test-ebooks.zip',
      contentType: 'application/zip',
    });
    formData.append('defaultPoints', '5');
    formData.append('defaultCategory', 'Teste');

    console.log('🚀 Fazendo upload...');

    // Fazer requisição para a API
    const response = await fetch('http://localhost:3000/api/upload-ebooks-batch', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    console.log('\n📊 Resultado:');
    console.log('Status:', response.status);

    if (response.ok) {
      console.log('✅ Upload bem-sucedido!');
      console.log('Mensagem:', result.message);
      console.log('Total processado:', result.summary.total);
      console.log('Sucessos:', result.summary.success);
      console.log('Erros:', result.summary.errors);

      if (result.results && result.results.length > 0) {
        console.log('\n📚 Ebooks processados:');
        result.results.forEach((ebook, index) => {
          const status = ebook.success ? '✅' : '❌';
          console.log(`${status} ${index + 1}. ${ebook.title}`);
          if (ebook.error) {
            console.log(`   Erro: ${ebook.error}`);
          }
        });
      }
    } else {
      console.log('❌ Erro no upload:');
      console.log('Erro:', result.error);
      if (result.details) {
        console.log('Detalhes:', result.details);
      }
    }
  } catch (error) {
    console.log('❌ Erro ao testar upload:', error.message);

    if (error.code === 'ECONNREFUSED') {
      console.log('💡 Servidor não está rodando. Execute: npm run dev');
    }
  }
}

async function main() {
  console.log('🔍 Verificando configuração...\n');

  // Verificar se o servidor está rodando
  try {
    const serverResponse = await fetch('http://localhost:3000/api/auth/session');
    if (!serverResponse.ok) {
      console.log('❌ Servidor não está respondendo corretamente');
      return;
    }
    console.log('✅ Servidor está rodando');
  } catch (error) {
    console.log('❌ Servidor não está rodando');
    console.log('💡 Execute: npm run dev');
    return;
  }

  await testBatchUpload();
}

main().catch(console.error);
