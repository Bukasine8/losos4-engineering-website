import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/admin/DataTable";

export default function ServicesListPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Services</h1>
        <Button asChild><Link href="/admin/services/new">Add Service</Link></Button>
      </div>
      <DataTable
        columns={[
          { key: "name", label: "Service Name" },
          { key: "status", label: "Status" },
          { key: "updated", label: "Last Updated" },
        ]}
        data={[]}
        empty="No services yet. Create your first service."
      />
    </div>
  );
}
