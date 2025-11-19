import React from "react";

export function StatusBadge({ status }: { status: "draft" | "published" | "new" | "read" | "unread" }) {
  const map: Record<string, string> = {
    draft: "bg-amber-100 text-amber-800",
    published: "bg-green-100 text-green-800",
    new: "bg-blue-100 text-blue-800",
    read: "bg-gray-100 text-gray-800",
    unread: "bg-red-100 text-red-800",
  };
  return <span className={`text-xs px-2 py-0.5 rounded ${map[status]}`}>{status}</span>;
}
