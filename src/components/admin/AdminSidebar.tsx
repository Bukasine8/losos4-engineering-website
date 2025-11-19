"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { supabaseBrowser } from "@/lib/supabase-browser";

const items = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/categories", label: "Categories" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/team", label: "Team" },
  { href: "/admin/messages", label: "Messages" },
  { href: "/admin/quotes", label: "Quotes" },
  { href: "/admin/settings", label: "Settings" },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = React.useState(true);

  async function onLogout() {
    await supabaseBrowser.auth.signOut();
    router.replace("/admin/login");
  }

  return (
    <aside className={`border-r border-gray-200 bg-white h-screen sticky top-0 ${open ? "w-64" : "w-16"} transition-[width] duration-200 hidden md:flex flex-col`}>
      <div className="h-14 flex items-center justify-between px-3 border-b">
        <Link href="/admin" className="font-semibold text-sm">Admin</Link>
        <Button variant="ghost" size="icon" onClick={() => setOpen((o) => !o)} aria-label="Toggle sidebar">
          <span className="i-lucide-panel-left-close size-4" />
        </Button>
      </div>
      <nav className="flex-1 py-2">
        {items.map((it) => {
          const active = pathname === it.href || (it.href !== "/admin" && pathname.startsWith(it.href));
          return (
            <Link key={it.href} href={it.href} className={`flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 ${active ? "bg-gray-100 font-medium" : "text-gray-700"}`}>
              <span className="i-lucide-dot size-4" />
              <span className={`${open ? "block" : "hidden"}`}>{it.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-3 border-t">
        <Button variant="outline" className="w-full" onClick={onLogout}>Logout</Button>
      </div>
    </aside>
  );
}
