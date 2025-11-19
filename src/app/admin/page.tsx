import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {["Total Projects", "Blog Posts", "Messages", "Team Members"].map((title) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">0</div>
              <p className="text-xs text-gray-500 mt-1">No data yet</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Monthly Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-white border border-gray-200 rounded-md grid place-items-center text-sm text-gray-500">Chart placeholder</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>No recent activity</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
