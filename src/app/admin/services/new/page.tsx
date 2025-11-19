import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ServiceCreatePage() {
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-semibold">New Service</h1>
      <div className="grid gap-4">
        <Input placeholder="Name" />
        <Input placeholder="Icon (name)" />
        <Textarea placeholder="Short description" />
        <Textarea placeholder="Detailed description" />
        <Textarea placeholder="Deliverables (comma separated)" />
        <Textarea placeholder="Capabilities (comma separated)" />
        <Input placeholder="Related projects (IDs comma separated)" />
        <div className="flex gap-2">
          <Button>Save</Button>
          <Button variant="outline">Publish</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </div>
    </div>
  );
}
