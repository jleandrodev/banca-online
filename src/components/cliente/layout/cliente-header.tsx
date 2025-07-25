'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogOut, User, Coins } from 'lucide-react';

export function ClienteHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center">
          <Image src="/images/logoipsum.png" alt="Logo" width={120} height={40} className="h-10 w-auto" />
        </Link>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/catalogo" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Catálogo
          </Link>
          <Link href="/biblioteca" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Minha Biblioteca
          </Link>
        </nav>

        {/* Saldo e Avatar */}
        <div className="flex items-center space-x-4">
          {/* Saldo */}
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
            <Coins className="h-4 w-4 text-blue-600" />
            <span className="text-blue-800 font-medium text-sm">Saldo: 35</span>
          </div>

          {/* Avatar */}
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-4 w-4 text-gray-600" />
          </div>

          {/* Botão Logout */}
          <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900">
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
}
