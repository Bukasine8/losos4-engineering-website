import React from "react";
import { DataTable } from "@/components/admin/DataTable";

export default function MessagesListPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Messages</h1>
      <DataTable
        columns={[
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
          { key: "date", label: "Date" },
          { key: "status", label: "Status" },
        ]}
        data={[]}
        empty="No messages yet."
      />
    </div>
  );
}
