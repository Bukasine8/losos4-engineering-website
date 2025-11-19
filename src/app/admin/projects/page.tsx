import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/admin/DataTable";

export default function ProjectsListPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <Button asChild><Link href="/admin/projects/new">Add Project</Link></Button>
      </div>
      <DataTable
        columns={[
          { key: "title", label: "Title" },
          { key: "category", label: "Category" },
          { key: "status", label: "Status" },
          { key: "date", label: "Publish Date" },
        ]}
        data={[]}
        empty="No projects yet. Create your first project."
      />
    </div>
  );
}
