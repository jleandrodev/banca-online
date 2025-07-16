'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { BookOpen, Home, Library, LogOut, User } from 'lucide-react';

export function ClienteSidebar() {
  const pathname = usePathname();

  const navigation = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: Home,
    },
    {
      name: 'Catálogo',
      href: '/catalogo',
      icon: BookOpen,
    },
    {
      name: 'Minha Biblioteca',
      href: '/biblioteca',
      icon: Library,
    },
  ];

  return (
    <nav className="grid items-start gap-2 px-4">
      {navigation.map((item) => {
        const Icon = item.icon;
        return (
          <Link key={item.name} href={item.href}>
            <Button
              variant={pathname === item.href ? 'secondary' : 'ghost'}
              className={cn('w-full justify-start', pathname === item.href && 'bg-secondary text-secondary-foreground')}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.name}
            </Button>
          </Link>
        );
      })}

      <div className="mt-auto pt-4">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">João Silva</p>
            <p className="text-xs text-muted-foreground">Cliente</p>
          </div>
        </div>
        <Button variant="ghost" className="w-full justify-start mt-2">
          <LogOut className="mr-2 h-4 w-4" />
          Sair
        </Button>
      </div>
    </nav>
  );
}
