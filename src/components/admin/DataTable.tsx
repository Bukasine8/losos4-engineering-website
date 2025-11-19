import React from "react";

export function DataTable({ columns, data, empty }: { columns: { key: string; label: string }[]; data: any[]; empty?: string }) {
  if (!data?.length) {
    return (
      <div className="border rounded-md bg-white p-8 text-center text-sm text-gray-600">
        {empty || "No data available"}
      </div>
    );
  }
  return (
    <div className="overflow-x-auto border rounded-md bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 border-b">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="text-left px-4 py-2 font-medium text-gray-600">{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              {columns.map((c) => (
                <td key={c.key} className="px-4 py-2">{row[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
