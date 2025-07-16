// components/seating-chart/Toolbar.tsx
"use client";

import React from "react";

interface ToolbarProps {
  onAddTable: () => void;
}

export default function Toolbar({ onAddTable }: ToolbarProps) {
  return (
    <div className="flex gap-4">
      <button
        onClick={onAddTable}
        className="rounded border px-4 py-2 text-sm bg-gray-100"
      >
        + Table
      </button>
    </div>
  );
}
