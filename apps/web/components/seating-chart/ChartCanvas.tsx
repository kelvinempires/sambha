// components/seating-chart/ChartCanvas.tsx
"use client";

import React from "react";
import TableItem from "./TableItem";

interface ChartCanvasProps {
  tables: { id: string; seats: any[] }[];
}

export default function ChartCanvas({ tables }: ChartCanvasProps) {
  return (
    <div className="relative h-[600px] w-full rounded-lg border border-dashed bg-gray-50 p-4">
      {tables.length === 0 && (
        <p className="text-center text-gray-400">No tables yet</p>
      )}
      {tables.map((table) => (
        <TableItem key={table.id} id={table.id} />
      ))}
    </div>
  );
}
