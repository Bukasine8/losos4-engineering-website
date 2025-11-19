"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function AdminBreadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean).slice(1); // drop 'admin'

  return (
    <div className="text-sm text-gray-600">
      <nav className="inline-flex items-center gap-2">
        <Link href="/admin" className="hover:underline">Admin</Link>
        {parts.map((p, idx) => {
          const href = "/admin/" + parts.slice(0, idx + 1).join("/");
          const isLast = idx === parts.length - 1;
          return (
            <span key={href} className="inline-flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-900 capitalize">{decodeURIComponent(p)}</span>
              ) : (
                <Link href={href} className="hover:underline capitalize">{decodeURIComponent(p)}</Link>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
