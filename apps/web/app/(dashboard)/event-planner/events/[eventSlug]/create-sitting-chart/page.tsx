"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ElementIcon from "components/icons/ElementIcon";
import UserIcon from "components/icons/UserIcon";
import TextIcon from "components/icons/TestIcon";
import TableItem from "components/event-sittings/TableItem";
import AddText from "components/event-sittings/AddText";
import GuestSelector from "components/event-sittings/GuestSelector";

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

  const renderContent = () => {
    switch (activeTab) {
      case "Items":
        return <TableItem />;
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

      {/* Content */}
      <div className="flex flex-col md:flex-row w-full h-[743px]">
        <div className="py-4 md:max-w-[30%] w-full border-r md:pr-8 px-4 md:px-0 ">
          {renderContent()}
        </div>
        <div className="flex-1 bg-white-80 rounded-r-2xl"></div>
      </div>
    </div>
  );
}
