import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/admin/DataTable";

export default function CategoriesListPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Categories</h1>
        <Button asChild><Link href="/admin/categories/new">Add Category</Link></Button>
      </div>
      <DataTable
        columns={[
          { key: "name", label: "Name" },
          { key: "count", label: "# Projects" },
        ]}
        data={[]}
        empty="No categories yet."
      />
    </div>
  );
}
