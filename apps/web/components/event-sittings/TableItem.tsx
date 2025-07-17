// components/seating-chart/TableItem.tsx
"use client";

import React from "react";

interface TableItemProps {
  id: string;
}

export default function TableItem({ id }: TableItemProps) {
  return (
    <div className="absolute top-10 left-10 flex h-24 w-24 items-center justify-center rounded bg-blue-100 border shadow">
      <span className="text-sm font-medium">Table {id}</span>
    </div>
  );
}
