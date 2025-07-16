'use client';

import { DashboardPageHeader } from '@/components/dashboard/layout/dashboard-page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Search, Download, BookOpen, Eye } from 'lucide-react';

export default function BibliotecaPage() {
  // Dados mockados da biblioteca
  const meusEbooks = [
    {
      id: 1,
      titulo: 'O Poder do Hábito',
      autor: 'Charles Duhigg',
      dataResgate: '15/01/2024',
      imagem: '/api/placeholder/300/200',
      paginas: 320,
      resumo:
        'Por que fazemos o que fazemos na vida e nos negócios? Charles Duhigg responde a essa pergunta com uma descoberta surpreendente: a chave para exercer regularmente, perder peso, educar bem os filhos, se tornar mais produtivo, criar empresas revolucionárias e ter sucesso é entender como os hábitos funcionam.',
      categoria: 'Desenvolvimento Pessoal',
      idioma: 'Português',
      formato: 'EPUB',
    },
    {
      id: 2,
      titulo: 'A Startup Enxuta',
      autor: 'Eric Ries',
      dataResgate: '10/01/2024',
      imagem: '/api/placeholder/300/200',
      paginas: 280,
      resumo:
        'Eric Ries define uma startup como uma organização dedicada a criar algo novo sob condições de extrema incerteza. Este é apenas um dos princípios fundamentais do movimento Lean Startup. O livro apresenta uma abordagem sistemática para criar e gerenciar startups de sucesso.',
      categoria: 'Negócios',
      idioma: 'Português',
      formato: 'EPUB',
    },
    {
      id: 3,
      titulo: 'O Monge e o Executivo',
      autor: 'James C. Hunter',
      dataResgate: '05/01/2024',
      imagem: '/api/placeholder/300/200',
      paginas: 240,
      resumo:
        'Leonard Hoffman, um renomado executivo aposentado, se torna monge em um mosteiro beneditino. Lá, ele aprende sobre liderança servidora através de conversas profundas com Simeão, o abade do mosteiro. A história revela os princípios fundamentais da verdadeira liderança.',
      categoria: 'Liderança',
      idioma: 'Português',
      formato: 'EPUB',
    },
    {
      id: 4,
      titulo: 'Pense e Enriqueça',
      autor: 'Napoleon Hill',
      dataResgate: '20/12/2023',
      imagem: '/api/placeholder/300/200',
      paginas: 350,
      resumo:
        'Baseado em entrevistas com mais de 500 das pessoas mais bem-sucedidas do mundo, incluindo Henry Ford, Thomas Edison e Alexander Graham Bell, Napoleon Hill revela os segredos do sucesso financeiro e pessoal através de princípios atemporais.',
      categoria: 'Motivação',
      idioma: 'Português',
      formato: 'EPUB',
    },
  ];

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-8">
      <DashboardPageHeader pageTitle="Minha Biblioteca" />

      {/* Filtros */}
      <Card className="bg-background/70 backdrop-blur-[6px] border-border">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Buscar na biblioteca..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-[150px]">
                <SelectValue placeholder="Ordenar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recentes">Mais Recentes</SelectItem>
                <SelectItem value="antigos">Mais Antigos</SelectItem>
                <SelectItem value="titulo">Título A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Grid de e-books */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {meusEbooks.map((ebook) => (
          <Card
            key={ebook.id}
            className="bg-background/70 backdrop-blur-[6px] border-border hover:border-border/60 transition-all duration-200 hover:shadow-lg overflow-hidden group"
          >
            {/* Imagem do e-book (header do card) */}
            <div className="relative h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{ebook.paginas} páginas</span>
                  <span className="text-xs font-medium text-white">Resgatado</span>
                </div>
              </div>
            </div>

            {/* Conteúdo do card */}
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <CardTitle className="text-base font-semibold line-clamp-2 mb-1">{ebook.titulo}</CardTitle>
                  <CardDescription className="text-sm">por {ebook.autor}</CardDescription>
                  <div className="text-xs text-muted-foreground mt-1">Resgatado em {ebook.dataResgate}</div>
                </div>

                {/* Botões de ação */}
                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Ler
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-xl">{ebook.titulo}</DialogTitle>
                        <DialogDescription>
                          por {ebook.autor} • {ebook.categoria}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="space-y-6">
                        {/* Imagem e informações principais */}
                        <div className="flex gap-6">
                          <div className="w-32 h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg flex-shrink-0"></div>
                          <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">Resgatado em {ebook.dataResgate}</Badge>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-muted-foreground">Páginas:</span>
                                <p className="font-medium">{ebook.paginas}</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Idioma:</span>
                                <p className="font-medium">{ebook.idioma}</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Formato:</span>
                                <p className="font-medium">{ebook.formato}</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Categoria:</span>
                                <p className="font-medium">{ebook.categoria}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Resumo */}
                        <div>
                          <h4 className="font-semibold mb-2">Resumo</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{ebook.resumo}</p>
                        </div>

                        {/* Botões de ação */}
                        <div className="flex gap-2">
                          <Button className="flex-1">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Ler E-book
                          </Button>
                          <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Estado vazio */}
      {meusEbooks.length === 0 && (
        <Card className="bg-background/70 backdrop-blur-[6px] border-border">
          <CardContent className="pt-6">
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sua biblioteca está vazia</h3>
              <p className="text-muted-foreground mb-4">
                Resgate seu primeiro e-book no catálogo para começar sua jornada de leitura
              </p>
              <Button>
                <BookOpen className="h-4 w-4 mr-2" />
                Ver Catálogo
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
