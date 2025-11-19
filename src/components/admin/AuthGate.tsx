"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase-browser";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = React.useState(true);
  const [authed, setAuthed] = React.useState(false);

  React.useEffect(() => {
    let active = true;
    if (pathname?.startsWith("/admin/login")) {
      setChecking(false);
      setAuthed(true);
      return;
    }
    (async () => {
      try {
        const { data } = await supabaseBrowser.auth.getSession();
        if (!active) return;
        if (!data.session) {
          router.replace("/admin/login");
          setAuthed(false);
        } else {
          setAuthed(true);
        }
      } finally {
        if (active) setChecking(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [router, pathname]);

  if (checking) {
    return (
      <div className="min-h-[50vh] grid place-items-center text-sm text-gray-600">Checking authentication…</div>
    );
  }

  return <>{authed ? children : null}</>;
}
