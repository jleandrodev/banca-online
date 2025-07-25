'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Search, Filter, BookOpen, Star, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CatalogoPage() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);

  // Categorias com imagens
  const categorias = [
    { nome: 'Autoajuda', imagem: '/images/autoajuda.jpg' },
    { nome: 'Desenvolvimento Pessoal', imagem: '/images/desenvolvimentopessoal.jpg' },
    { nome: 'Finanças', imagem: '/images/financas.jpg' },
    { nome: 'Aventura', imagem: '/images/aventura.jpg' },
    { nome: 'Drama', imagem: '/images/drama.jpg' },
    { nome: 'Culinária', imagem: '/images/receitas.jpg' },
  ];

  // Dados mockados do catálogo
  const ebooks = [
    {
      id: 2,
      titulo: 'A Startup Enxuta',
      autor: 'Eric Ries',
      categoria: 'Negócios',
      imagem: '/images/financas.jpg',
      descricao: 'Metodologia para criar startups de sucesso',
      resumo:
        'Eric Ries define uma startup como uma organização dedicada a criar algo novo sob condições de extrema incerteza. Este é apenas um dos princípios fundamentais do movimento Lean Startup. O livro apresenta uma abordagem sistemática para criar e gerenciar startups de sucesso.',
      avaliacao: 4.6,
      paginas: 280,
      idioma: 'Português',
      formato: 'EPUB',
    },
    {
      id: 3,
      titulo: 'O Monge e o Executivo',
      autor: 'James C. Hunter',
      categoria: 'Liderança',
      imagem: '/images/desenvolvimentopessoal.jpg',
      descricao: 'Uma história sobre a essência da liderança',
      resumo:
        'Leonard Hoffman, um renomado executivo aposentado, se torna monge em um mosteiro beneditino. Lá, ele aprende sobre liderança servidora através de conversas profundas com Simeão, o abade do mosteiro. A história revela os princípios fundamentais da verdadeira liderança.',
      avaliacao: 4.9,
      paginas: 240,
      idioma: 'Português',
      formato: 'EPUB',
    },
    {
      id: 4,
      titulo: 'Pense e Enriqueça',
      autor: 'Napoleon Hill',
      categoria: 'Motivação',
      imagem: '/images/autoajuda.jpg',
      descricao: 'Os princípios do sucesso financeiro',
      resumo:
        'Baseado em entrevistas com mais de 500 das pessoas mais bem-sucedidas do mundo, incluindo Henry Ford, Thomas Edison e Alexander Graham Bell, Napoleon Hill revela os segredos do sucesso financeiro e pessoal através de princípios atemporais.',
      avaliacao: 4.7,
      paginas: 350,
      idioma: 'Português',
      formato: 'EPUB',
    },
    {
      id: 5,
      titulo: 'Como Fazer Amigos',
      autor: 'Dale Carnegie',
      categoria: 'Relacionamentos',
      imagem: '/images/drama.jpg',
      descricao: 'Técnicas para influenciar pessoas',
      resumo:
        'Dale Carnegie oferece conselhos práticos sobre como melhorar as relações interpessoais, influenciar pessoas e se tornar um líder mais eficaz. O livro apresenta técnicas comprovadas para construir relacionamentos duradouros e alcançar o sucesso pessoal e profissional.',
      avaliacao: 4.5,
      paginas: 290,
      idioma: 'Português',
      formato: 'EPUB',
    },
    {
      id: 6,
      titulo: 'A Última Palavra',
      autor: 'Stephen R. Covey',
      categoria: 'Produtividade',
      imagem: '/images/desenvolvimentopessoal.jpg',
      descricao: 'Os 7 hábitos das pessoas altamente eficazes',
      resumo:
        'Stephen Covey apresenta sete hábitos fundamentais que podem transformar a vida pessoal e profissional. O livro combina princípios atemporais com insights práticos sobre como desenvolver caráter, melhorar relacionamentos e alcançar objetivos significativos.',
      avaliacao: 4.8,
      paginas: 380,
      idioma: 'Português',
      formato: 'EPUB',
    },
    {
      id: 7,
      titulo: 'O Milionário Automático',
      autor: 'David Bach',
      categoria: 'Finanças',
      imagem: '/images/financas.jpg',
      descricao: 'Estratégias para construir riqueza automaticamente',
      resumo:
        'David Bach apresenta um sistema simples e eficaz para construir riqueza automaticamente, sem precisar de grandes sacrifícios. O livro mostra como pequenas mudanças nos hábitos financeiros podem gerar grandes resultados ao longo do tempo.',
      avaliacao: 4.4,
      paginas: 310,
      idioma: 'Português',
      formato: 'EPUB',
    },
    {
      id: 8,
      titulo: 'A Arte da Guerra',
      autor: 'Sun Tzu',
      categoria: 'Estratégia',
      imagem: '/images/aventura.jpg',
      descricao: 'Princípios milenares de estratégia e liderança',
      resumo:
        'Um dos tratados militares mais antigos e influentes do mundo, A Arte da Guerra continua relevante para estratégias de negócios e liderança moderna. Sun Tzu apresenta princípios atemporais sobre planejamento, execução e adaptação.',
      avaliacao: 4.6,
      paginas: 200,
      idioma: 'Português',
      formato: 'EPUB',
    },
    {
      id: 9,
      titulo: 'Receitas da Vovó',
      autor: 'Maria Silva',
      categoria: 'Culinária',
      imagem: '/images/receitas.jpg',
      descricao: 'Tradicionais receitas de família',
      resumo:
        'Uma coleção de receitas tradicionais passadas de geração em geração, com dicas e truques culinários que fazem toda a diferença. De pratos simples aos mais elaborados, este livro resgata o sabor da comida caseira e o amor pela culinária.',
      avaliacao: 4.9,
      paginas: 280,
      idioma: 'Português',
      formato: 'EPUB',
    },
  ];

  const categoriasFiltro = [
    'Todas',
    'Desenvolvimento Pessoal',
    'Negócios',
    'Liderança',
    'Motivação',
    'Relacionamentos',
    'Produtividade',
  ];

  // Filtrar e-books baseado na categoria selecionada
  const ebooksFiltrados = categoriaSelecionada
    ? ebooks.filter((ebook) => ebook.categoria === categoriaSelecionada)
    : ebooks;

  const handleCategoriaClick = (categoria: string) => {
    setCategoriaSelecionada(categoria === categoriaSelecionada ? null : categoria);
  };

  const limparFiltro = () => {
    setCategoriaSelecionada(null);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header da página */}
      <div className="bg-white px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">Catálogo de E-books</h1>
          <p className="text-gray-600 text-center">Explore nossa coleção completa de e-books</p>
        </div>
      </div>

      {/* Seção de Navegação por Categorias */}
      <section className="px-6 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Carrossel para mobile, Grid para desktop */}
          <div className="md:hidden">
            {/* Carrossel Mobile */}
            <div className="relative">
              <div className="flex gap-4 overflow-x-auto pb-4 scroll-smooth scrollbar-hide">
                {categorias.map((categoria, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 group cursor-pointer"
                    onClick={() => handleCategoriaClick(categoria.nome)}
                  >
                    <div className="w-[200px] h-[200px] rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <Image
                        src={categoria.imagem}
                        alt={categoria.nome}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-center mt-3 text-gray-800 font-medium group-hover:text-gray-900 transition-colors text-sm">
                      {categoria.nome}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grid para desktop */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categorias.map((categoria, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => handleCategoriaClick(categoria.nome)}>
                <div className="w-[200px] h-[200px] mx-auto rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={categoria.imagem}
                    alt={categoria.nome}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-center mt-3 text-gray-800 font-medium group-hover:text-gray-900 transition-colors text-sm">
                  {categoria.nome}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filtro ativo */}
        {categoriaSelecionada && (
          <div className="mb-6 flex items-center gap-2">
            <Badge className="bg-blue-100 text-blue-800 border border-blue-200 px-3 py-1">
              Filtrado por: {categoriaSelecionada}
            </Badge>
            <Button variant="ghost" size="sm" onClick={limparFiltro} className="text-gray-500 hover:text-gray-700">
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Filtros */}
        <Card className="bg-white border border-gray-200 mb-8 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar e-books..."
                  className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-[200px] border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200">
                  {categoriasFiltro.map((categoria) => (
                    <SelectItem key={categoria} value={categoria} className="text-gray-700 hover:bg-gray-50">
                      {categoria}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-[150px] border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Ordenar" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200">
                  <SelectItem value="recentes" className="text-gray-700 hover:bg-gray-50">
                    Mais Recentes
                  </SelectItem>
                  <SelectItem value="antigos" className="text-gray-700 hover:bg-gray-50">
                    Mais Antigos
                  </SelectItem>
                  <SelectItem value="titulo" className="text-gray-700 hover:bg-gray-50">
                    Título A-Z
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Grid de e-books */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ebooksFiltrados.map((ebook) => (
            <Card
              key={ebook.id}
              className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-lg overflow-hidden group"
            >
              {/* Imagem do e-book */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={ebook.imagem}
                  alt={ebook.titulo}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-3 w-3 fill-current" />
                    <span className="text-xs font-medium text-white">{ebook.avaliacao}</span>
                  </div>
                </div>
              </div>

              {/* Conteúdo do card */}
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <CardTitle className="text-base font-semibold line-clamp-2 mb-1 text-gray-900">
                      {ebook.titulo}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">por {ebook.autor}</CardDescription>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{ebook.categoria}</span>
                    <span>{ebook.paginas} páginas</span>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2">{ebook.descricao}</p>

                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Resgatar
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl bg-white border border-gray-200">
                        <DialogHeader className="border-b border-gray-100 pb-4">
                          <DialogTitle className="text-xl text-gray-900">{ebook.titulo}</DialogTitle>
                          <DialogDescription className="text-gray-600">
                            por {ebook.autor} • {ebook.categoria}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6 pt-4">
                          {/* Imagem e informações principais */}
                          <div className="flex gap-6">
                            <div className="w-32 h-48 overflow-hidden rounded-lg flex-shrink-0 border border-gray-200">
                              <Image
                                src={ebook.imagem}
                                alt={ebook.titulo}
                                width={128}
                                height={192}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 space-y-4">
                              <div className="flex items-center gap-1 text-yellow-500">
                                <Star className="h-3 w-3 fill-current" />
                                <span className="text-sm font-medium text-gray-900">{ebook.avaliacao}</span>
                              </div>

                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-gray-500">Páginas:</span>
                                  <p className="font-medium text-gray-900">{ebook.paginas}</p>
                                </div>
                                <div>
                                  <span className="text-gray-500">Idioma:</span>
                                  <p className="font-medium text-gray-900">{ebook.idioma}</p>
                                </div>
                                <div>
                                  <span className="text-gray-500">Formato:</span>
                                  <p className="font-medium text-gray-900">{ebook.formato}</p>
                                </div>
                                <div>
                                  <span className="text-gray-500">Categoria:</span>
                                  <p className="font-medium text-gray-900">{ebook.categoria}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Resumo */}
                          <div className="border-t border-gray-100 pt-4">
                            <h4 className="font-semibold mb-2 text-gray-900">Resumo</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{ebook.resumo}</p>
                          </div>

                          {/* Botão de resgate */}
                          <div className="flex justify-end border-t border-gray-100 pt-4">
                            <Button className="w-full sm:w-auto">
                              <BookOpen className="h-4 w-4 mr-2" />
                              Resgatar E-book
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

        {/* Paginação */}
        <div className="mt-12 flex items-center justify-center">
          <div className="flex items-center gap-2">
            {/* Botão Anterior */}
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Anterior
            </Button>

            {/* Números das páginas */}
            <div className="flex items-center gap-1">
              <Button size="sm" className="w-8 h-8 p-0 bg-blue-600 text-white hover:bg-blue-700">
                1
              </Button>
              <Button variant="outline" size="sm" className="w-8 h-8 p-0 border-gray-300 hover:bg-gray-50">
                2
              </Button>
              <Button variant="outline" size="sm" className="w-8 h-8 p-0 border-gray-300 hover:bg-gray-50">
                3
              </Button>
              <span className="text-gray-500 px-2">...</span>
              <Button variant="outline" size="sm" className="w-8 h-8 p-0 border-gray-300 hover:bg-gray-50">
                8
              </Button>
            </div>

            {/* Botão Próximo */}
            <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50">
              Próximo
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Estado vazio */}
        {ebooksFiltrados.length === 0 && (
          <Card className="bg-white border border-gray-200">
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {categoriaSelecionada
                    ? `Nenhum e-book encontrado na categoria "${categoriaSelecionada}"`
                    : 'Nenhum e-book encontrado'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {categoriaSelecionada
                    ? 'Tente selecionar outra categoria ou ajustar os filtros'
                    : 'Tente ajustar os filtros ou buscar por outro termo'}
                </p>
                {categoriaSelecionada && (
                  <Button onClick={limparFiltro} className="mr-2">
                    Limpar Filtro
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
