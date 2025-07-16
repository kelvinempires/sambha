"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

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
    <div className="p-6 space-y-4">
      {/* Breadcrumb */}
      <div className="text-sm flex items-center text-gray-600 space-x-1">
        <Link href="/event-planner/events" className="underline">
          Events
        </Link>
        <span>/</span>
        <Link href={`/event-planner/events/${eventSlug}`} className="underline">
          <span>{currentEvent?.slug ?? "Event not found"}</span>
        </Link>
        <span>/</span>
        <h1 className="font-bold">Create Seating Chart</h1>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl font-bold">
        {currentEvent?.name ?? "Event not found"}
      </h1>
    </div>
  );
}
