"use client";
import React from "react";

export function FileUpload({ multiple = false }: { multiple?: boolean }) {
  return (
    <div className="border rounded-md bg-white p-4">
      <input type="file" multiple={multiple} className="block text-sm" />
    </div>
  );
}
