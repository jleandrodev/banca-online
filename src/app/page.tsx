import { HomePage } from '@/components/home/home-page';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Banca Online</h1>
        <p className="text-lg text-gray-600">Sistema de gerenciamento de ebooks</p>
      </div>
    </div>
  );
}
