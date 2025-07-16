// components/seating-chart/ChartCanvas.tsx
"use client";

import React from "react";
import TableItem from "./TableItem";

interface Seat {
  // Define the properties of a Seat here, for example:
  id?: string;
  number?: number;
}

interface ChartCanvasProps {
    tables: {
        id?: string;
        seats?: Seat[];
    }[];
}

export default function ChartCanvas({ tables }: ChartCanvasProps) {
  return (
    <div className="relative h-[600px] w-full rounded-lg border border-dashed bg-gray-50 p-4">
      {tables.length === 0 && (
        <p className="text-center text-gray-400">No tables yet</p>
      )}
      {tables
        .filter((table) => typeof table.id === "string")
        .map((table) => (
          <TableItem key={table.id as string} id={table.id as string} />
        ))}
    </div>
  );
}
