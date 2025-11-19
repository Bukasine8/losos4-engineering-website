import React from "react";
import { DataTable } from "@/components/admin/DataTable";

export default function QuotesListPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Quote Requests</h1>
      <DataTable
        columns={[
          { key: "name", label: "Name" },
          { key: "type", label: "Project Type" },
          { key: "budget", label: "Budget" },
          { key: "date", label: "Date" },
        ]}
        data={[]}
        empty="No quote requests yet."
      />
    </div>
  );
}
