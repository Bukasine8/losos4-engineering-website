"use client";
import React from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminBreadcrumbs } from "@/components/admin/AdminBreadcrumbs";
import { AuthGate } from "@/components/admin/AuthGate";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const onLogin = pathname?.startsWith("/admin/login");
  return (
    <AuthGate>
      {onLogin ? (
        <div className="min-h-screen bg-white">{children}</div>
      ) : (
        <div className="min-h-screen bg-gray-50 text-gray-900 flex">
          <AdminSidebar />
          <div className="flex-1 flex flex-col">
            <div className="px-6 pt-6">
              <AdminBreadcrumbs />
            </div>
            <main className="p-6">{children}</main>
          </div>
        </div>
      )}
    </AuthGate>
  );
}
