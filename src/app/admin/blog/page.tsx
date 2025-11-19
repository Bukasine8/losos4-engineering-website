import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/admin/DataTable";

export default function BlogListPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Blog</h1>
        <Button asChild><Link href="/admin/blog/new">Add Blog Post</Link></Button>
      </div>
      <DataTable
        columns={[
          { key: "title", label: "Title" },
          { key: "category", label: "Category" },
          { key: "published", label: "Published" },
          { key: "date", label: "Date" },
        ]}
        data={[]}
        empty="No blog posts yet."
      />
    </div>
  );
}
