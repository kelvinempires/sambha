"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ElementIcon from "components/icons/ElementIcon";
import UserIcon from "components/icons/UserIcon";
import TextIcon from "components/icons/TestIcon";
import AddText from "components/event-sittings/AddText";
import GuestSelector from "components/event-sittings/GuestSelector";
import TableItems from "components/event-sittings/TableItems";
import { ArrowLeft, Minus, Plus, UserPlus } from "lucide-react";

// Pretend we fetched this or have it stored
const events = [
  {
    id: "abc123",
    slug: "oliver-and-emilys-wedding",
    name: "Oliver & Emily's Wedding",
  },
];

export default function CreateSittingChartPage() {
  const [activeTab, setActiveTab] = useState("Items");
  const { eventSlug } = useParams();
  const decodedSlug = decodeURIComponent(eventSlug as string);
  const currentEvent = events.find((event) => event.slug === decodedSlug);

  const icons = [
    { label: "Items", component: ElementIcon },
    { label: "Text", component: TextIcon },
    { label: "Guests", component: UserIcon },
  ];

  // types.ts or at the top of your file
  type TableShape = {
    id: number;
    className: string;
    name: string; // 👈 Add this line
  };

  const [selectedTable, setSelectedTable] = useState<TableShape | null>(null);
  const [seatCount, setSeatCount] = useState<number>(1);

  const incrementSeat = () => setSeatCount((prev) => prev + 1);
  const decrementSeat = () => setSeatCount((prev) => (prev > 1 ? prev - 1 : 1));

  const renderContent = () => {
    switch (activeTab) {
      case "Items":
        return selectedTable ? (
          <>
            <div className="space-y-4">
              <div className="border-b">
                <button
                  onClick={() => setSelectedTable(null)}
                  className="flex gap-2  py-3 items-center cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 text-gray-500 " />
                  <span className="text-darkPurple text-lg font-medium">
                    {selectedTable?.name || "Selected Table"}
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
        ) : (
          <TableItems onSelectTable={setSelectedTable} />
        );

      case "Text":
        return <AddText />;
      case "Guests":
        return <GuestSelector />;
      default:
        return null;
    }
  };

  return (
    <div className="py-6 space-y-4">
      {/* Breadcrumb */}
      <div className="md:text-sm text-xs flex items-center whitespace-nowrap text-gray-600 space-x-2">
        <Image
          src="/back.svg"
          width={10}
          height={10}
          className="w-4 h-4"
          alt="Back"
        />
        <Link
          href="/event-planner/events"
          className="text-gray-base font-medium md:text-base text-xs"
        >
          Events
        </Link>
        <span>/</span>

        <Link
          href={`/event-planner/events/${eventSlug}`}
          className="text-gray-base font-medium md:text-base text-xs"
        >
          <span>{currentEvent?.name ?? "Event not found"}</span>
        </Link>

        <span>/</span>

        <h1 className="font-medium text-primary-darkPurple text-xs md:text-base">
          Create Seating Chart
        </h1>
      </div>
      <div>
        {/* tabs + Icons */}
        <div className="flex w-[254px] border-b items-center justify-between">
          {icons.map(({ label, component: IconComponent }) => (
            <div
              key={label}
              onClick={() => setActiveTab(label)}
              className={`flex flex-col items-center  py-2 ${
                activeTab === label
                  ? "bg-primary-100 text-primary-600 border-b-2 px-4 border-primary-darkPurple"
                  : "text-gray-600 px-4"
              }`}
            >
              <IconComponent isActive={activeTab === label} />
              <span className="text-xs">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`flex w-full h-[743px] ${
          selectedTable
            ? "flex-col-reverse md:flex-row-reverse"
            : "flex-col md:flex-row"
        }`}
      >
        <div
          className={`py-4 md:max-w-[30%] w-full border-r md:pr-8 px-4 md:px-0 ${selectedTable ? "md:pl-8" : ""}`}
        >
          {renderContent()}
        </div>

        <div className="flex-1 bg-white-80 rounded-r-2xl flex items-center justify-center">
          {selectedTable ? (
            <div className={selectedTable.className} />
          ) : (
            <p className="text-gray-500">Click a table item to display here</p>
          )}
        </div>
      </div>
    </div>
  );
}
