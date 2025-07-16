'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { BookOpen, Upload, BarChart3, LogOut, User, Settings } from 'lucide-react';

const sidebarItems = [
  {
    title: 'Relatórios',
    icon: <BarChart3 className="h-6 w-6" />,
    href: '/admin',
  },
  {
    title: 'Gerenciar E-books',
    icon: <BookOpen className="h-6 w-6" />,
    href: '/admin/ebooks',
  },
  {
    title: 'Gerenciar Pontos',
    icon: <Upload className="h-6 w-6" />,
    href: '/admin/pontos',
  },
  {
    title: 'Configurações',
    icon: <Settings className="h-6 w-6" />,
    href: '/admin/configuracoes',
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col grow justify-between items-start px-2 text-sm font-medium lg:px-4">
      <div className={'w-full'}>
        {sidebarItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={cn('flex items-center text-base gap-3 px-4 py-3 rounded-xxs dashboard-sidebar-items', {
              'dashboard-sidebar-items-active':
                item.href === '/admin' ? pathname === item.href : pathname.includes(item.href),
            })}
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
