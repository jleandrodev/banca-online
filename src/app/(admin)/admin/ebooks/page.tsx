'use client';

import { DashboardPageHeader } from '@/components/dashboard/layout/dashboard-page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Search, Plus, Edit, Trash2, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function AdminEbooksPage() {
  // Dados mockados
  const ebooks = [
    {
      id: 1,
      titulo: 'O Senhor dos Anéis',
      autor: 'J.R.R. Tolkien',
      categoria: 'Fantasia',
      pontos: 100,
      resgates: 15,
      capa: '/assets/icons/product-icons/free-plan.png',
    },
    {
      id: 2,
      titulo: '1984',
      autor: 'George Orwell',
      categoria: 'Ficção',
      pontos: 80,
      resgates: 23,
      capa: '/assets/icons/product-icons/basic-plan.png',
    },
    {
      id: 3,
      titulo: 'Dom Casmurro',
      autor: 'Machado de Assis',
      categoria: 'Literatura',
      pontos: 60,
      resgates: 8,
      capa: '/assets/icons/product-icons/pro-plan.png',
    },
    {
      id: 4,
      titulo: 'O Hobbit',
      autor: 'J.R.R. Tolkien',
      categoria: 'Fantasia',
      pontos: 90,
      resgates: 12,
      capa: '/assets/icons/product-icons/free-plan.png',
    },
  ];

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-8">
      <DashboardPageHeader pageTitle="Gerenciar E-books" />

      {/* Estatísticas */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-background/70 backdrop-blur-[6px] border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de E-books</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ebooks.length}</div>
            <p className="text-xs text-muted-foreground">livros cadastrados</p>
          </CardContent>
        </Card>

        <Card className="bg-background/70 backdrop-blur-[6px] border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Resgates</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ebooks.reduce((total, ebook) => total + ebook.resgates, 0)}</div>
            <p className="text-xs text-muted-foreground">resgates realizados</p>
          </CardContent>
        </Card>

        <Card className="bg-background/70 backdrop-blur-[6px] border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">E-book Mais Popular</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">1984</div>
            <p className="text-xs text-muted-foreground">23 resgates</p>
          </CardContent>
        </Card>

        <Card className="bg-background/70 backdrop-blur-[6px] border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pontos Médios</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(ebooks.reduce((total, ebook) => total + ebook.pontos, 0) / ebooks.length)}
            </div>
            <p className="text-xs text-muted-foreground">por e-book</p>
          </CardContent>
        </Card>
      </div>

      {/* Ações e Busca */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar e-books..." className="pl-8 bg-background/50 border-border" />
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar E-book
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-background/95 backdrop-blur-[6px] border-border">
            <DialogHeader>
              <DialogTitle>Adicionar Novo E-book</DialogTitle>
              <DialogDescription>Preencha os dados do novo e-book</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Título</label>
                <Input placeholder="Digite o título" className="bg-background/50 border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Autor</label>
                <Input placeholder="Digite o autor" className="bg-background/50 border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Categoria</label>
                <Input placeholder="Digite a categoria" className="bg-background/50 border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Pontos</label>
                <Input type="number" placeholder="0" className="bg-background/50 border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Capa</label>
                <Input type="file" accept="image/*" className="bg-background/50 border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Arquivo</label>
                <Input type="file" accept=".pdf,.epub" className="bg-background/50 border-border" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancelar</Button>
              <Button variant="secondary">
                <Plus className="mr-2 h-4 w-4" />
                Adicionar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Tabela de E-books */}
      <Card className="bg-background/70 backdrop-blur-[6px] border-border">
        <CardHeader>
          <CardTitle>E-books Cadastrados</CardTitle>
          <CardDescription>Gerencie todos os e-books disponíveis na plataforma</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Capa</TableHead>
                <TableHead>Título</TableHead>
                <TableHead>Autor</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Pontos</TableHead>
                <TableHead>Resgates</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ebooks.map((ebook) => (
                <TableRow key={ebook.id}>
                  <TableCell>
                    <div className="relative w-12 h-16 overflow-hidden rounded">
                      <Image src={ebook.capa} alt={ebook.titulo} fill className="object-cover" />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{ebook.titulo}</TableCell>
                  <TableCell>{ebook.autor}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {ebook.categoria}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">{ebook.pontos}</span>
                      <span className="text-xs text-muted-foreground">pts</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                      {ebook.resgates}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-destructive">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
