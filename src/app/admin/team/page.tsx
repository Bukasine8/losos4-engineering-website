import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/admin/DataTable";

export default function TeamListPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Team</h1>
        <Button asChild><Link href="/admin/team/new">Add Member</Link></Button>
      </div>
      <DataTable
        columns={[
          { key: "name", label: "Name" },
          { key: "role", label: "Role" },
          { key: "department", label: "Department" },
          { key: "status", label: "Status" },
        ]}
        data={[]}
        empty="No team members yet."
      />
    </div>
  );
}
