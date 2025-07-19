"use client";

import React, { useState } from "react";
import { ViewButton } from "./Details";
import { SearchFilter } from "./GuestSelector";
import { ArrowLeft, Minus, Plus, UserPlus } from "lucide-react";

// types.ts or at the top of your file
type TableShape = {
  id: number;
  className: string;
  name: string; // 👈 Add this line
};

type TableItemsProps = {
  onSelectTable: (table: TableShape) => void;
};

export default function TableItems({ onSelectTable }: TableItemsProps) {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [seatCount, setSeatCount] = useState<number>(1);

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

  const roundTables = Array.from({ length: 6 }, () => ({
    className: "w-4 h-4 bg-purple-base rounded-full",
  }));

  // const handleTableClick = (name: string) => {
  //   setSelectedTable(name === selectedTable ? null : name); // toggle
  // };

  const handleTableClick = (name: string) => {
    const selected = name === selectedTable ? null : name;
    setSelectedTable(selected);

    // If selected is not null, call onSelectTable with the data
    if (selected) {
      const table = tableTypes.find((t) => t.name === selected);
      if (table) {
        onSelectTable({
          id: tableTypes.indexOf(table),
          className: table.className,
          name: table.name,
        });
      }
    }
  };

  const incrementSeat = () => setSeatCount((prev) => prev + 1);
  const decrementSeat = () => setSeatCount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col w-full py-4 space-y-6">
      {!selectedTable && (
        <>
          <div className="flex justify-between w-full">
            <SearchFilter onSearch={(query) => console.log(query)} />
          </div>
          <div className="flex justify-between border-b py-4">
            <h2 className="text-green-900 text-lg font-medium">Seating</h2>
            <ViewButton />
          </div>

          {/* Shape selection */}
          <div className="grid gap-6 grid-cols-3 items-center py-4">
            {tableTypes.map((table, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center cursor-pointer"
                onClick={() => handleTableClick(table.name)}
              >
                <div className={table.className} />
                <h6 className="text-gray-base text-sm mt-1">{table.name}</h6>
              </div>
            ))}
          </div>

          {/* Round Seating Display */}
          <div>
            <div className="flex gap-2">
              {roundTables.map((seat, index) => (
                <div key={index} className={seat.className} />
              ))}
            </div>
            <h6 className="text-gray-base text-sm mt-2">Seating Row</h6>
          </div>
        </>
      )}

      {/* Conditionally show details for Long Table */}
      {selectedTable && (
        <>
          <div className="space-y-4">
            <div className="border-b">
              <button
                onClick={() => setSelectedTable(null)}
                className="flex gap-2  py-3 items-center cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-gray-500 " />
                <span className="text-darkPurple text-lg font-medium">
                  {selectedTable}
                </span>
              </button>
            </div>

            <div className="flex justify-between items-center py-4">
              <h1 className="text-base font-medium">Name</h1>
              <span className="text-lg text-purple-base font-normal">
                Table 1
              </span>
            </div>

            <div className="border-b text-sm font-normal text-gray-base w-full pb-4">
              <span>Seats</span>
            </div>

            <div className="flex justify-between items-center py-4">
              <span className="text-lg font-normal">Number of seats</span>
              <div className="flex gap-3 items-center">
                <Minus
                  className="w-8 h-8 p-2 rounded-full bg-white-90 cursor-pointer"
                  onClick={decrementSeat}
                />
                <span>{seatCount}</span>
                <Plus
                  className="w-8 h-8 p-2 rounded-full bg-white-90 cursor-pointer"
                  onClick={incrementSeat}
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm py-4">
              <span className="rounded-full text-center flex items-center justify-center font-normal bg-white-90 w-8 h-8">
                1
              </span>

              <div className="text-sm flex items-center font-normal gap-2">
                <button className="px-4 py-2 bg-white-90 rounded-full">
                  Kathryn Murphy
                </button>
                <UserPlus className="w-8 h-8 p-2 rounded-full bg-white-90 text-red-base cursor-pointer" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
