// components/seating-chart/TableItem.tsx
"use client";

import React from "react";
import { ViewButton } from "./Details";
import { SearchFilter } from "./AddText";

export default function TableItem() {
  const tableTypes = [
    {
      name: "Long Table",
      className: "w-20 h-10 bg-purple-base border-primary-black border-4",
    },
    {
      name: "Round Table",
      className:
        "w-20 h-20 bg-purple-base border-primary-black border-4 rounded-full",
    },
    {
      name: "Large Table",
      className: "w-32 h-28 bg-purple-base border-primary-black border-4",
    },
  ];

  // loop shapes
  const roundTables = Array.from({ length: 6 }, () => ({
    name: "Round Table",
    className: "w-4 h-4 bg-purple-base rounded-full",
  }));

  return (
    <div className="flex space-y-2 flex-col w-full py-4 ">
      <div className="w-full flex justify-between">
        <SearchFilter onSearch={(query) => console.log(query)} />
      </div>

      <div className="space-y-3 flex justify-between border-b py-4">
        <h2 className="text-lg font-medium text-primary-darkPurple">Seating</h2>
        <ViewButton />
      </div>

      <div className="flex gap-3 items-center justify-between py-4">
        {tableTypes.map((table, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className={table.className} />
            <h6 className="text-gray-base text-sm mt-1">{table.name}</h6>
          </div>
        ))}
      </div>

      <div className="py-4">
        <div className="flex">
          {roundTables.map((table, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={table.className} />
            </div>
          ))}
        </div>
        <h6 className="text-gray-base text-sm mt-1">Seating Row</h6>
      </div>
    </div>
  );
}
