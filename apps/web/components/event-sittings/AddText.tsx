// components/seating-chart/Toolbar.tsx
"use client";
import React from "react";

export default function AddText() {
  return (
    <div className="flex flex-col space-y-4">
      <button className="rounded-full border-primary-darkPurple p-4 w-full border">Add text box</button>
      <div className="space-y-2">
        <h1 className="border-b py-3">Font</h1>
      </div>
    </div>
  );
}
