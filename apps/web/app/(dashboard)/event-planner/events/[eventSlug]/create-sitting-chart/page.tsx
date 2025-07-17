"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ElementIcon from "components/icons/ElementIcon";
import UserIcon from "components/icons/UserIcon";
import TextIcon from "components/icons/TestIcon";
import TableItem from "components/event-sittings/TableItem";

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
        return <div>Text content here</div>;
      case "Guests":
        return <div>Guests content here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="py-6 space-y-4">
      {/* Breadcrumb */}
      <div className="text-sm flex items-center text-gray-600 space-x-2">
        <Image
          src="/back.svg"
          width={10}
          height={10}
          className="w-5 h-5"
          alt="Back"
        />
        <Link
          href="/event-planner/events"
          className="text-gray-base font-medium md:text-base text-sm"
        >
          Events
        </Link>
        <span>/</span>
        <Link
          href={`/event-planner/events/${eventSlug}`}
          className="text-gray-base font-medium md:text-base text-sm"
        >
          <span>{currentEvent?.name ?? "Event not found"}</span>
        </Link>
        <span>/</span>
        <h1 className="font-medium text-primary-darkPurple text-sm md:text-base">
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
              className={`flex flex-col items-center space-x-2  py-2 ${
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
      <div className="flex w-full h-[743px]">
        <div className="py-4 w-[30%] p-4 border-r">{renderContent()}</div>
        <div className="flex-1 bg-white-80 rounded-r-2xl"></div>
      </div>
    </div>
  );
}
