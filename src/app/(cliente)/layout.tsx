'use client';

import { DashboardLayout } from '@/components/dashboard/layout/dashboard-layout';

export default function ClienteLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
