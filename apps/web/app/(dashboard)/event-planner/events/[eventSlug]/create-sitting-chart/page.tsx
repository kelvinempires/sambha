"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Pretend we fetched this or have it stored
const events = [
  {
    id: "abc123",
    slug: "oliver-and-emilys-wedding",
    name: "Oliver & Emily's Wedding",
  },
];

export default function CreateSittingChartPage() {
  const { eventSlug } = useParams();
  const decodedSlug = decodeURIComponent(eventSlug as string);

  // Find event by slug
  const currentEvent = events.find((event) => event.slug === decodedSlug);

  return (
    <div className="py-6 space-y-4">
      {/* Breadcrumb */}
      <div className="text-sm flex items-center text-gray-600 space-x-2">
        <Image
          src="/back.svg"
          width={10}
          height={10}
          className="w-5 h-5"
          alt="back svg Image"
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
          <span>{currentEvent?.slug ?? "Event not found"}</span>
        </Link>
        <span>/</span>
        <h1 className="font-medium text-primary-darkPurple text-sm md:text-base">
          Create Seating Chart
        </h1>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl font-bold">
        {currentEvent?.name ?? "Event not found"}
      </h1>
    </div>
  );
}
