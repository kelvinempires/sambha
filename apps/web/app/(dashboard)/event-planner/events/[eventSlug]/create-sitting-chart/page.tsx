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

  // Find event by slug
  const currentEvent = events.find((event) => event.slug === eventSlug);

  return (
    <div className="p-6 space-y-4">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 space-x-1">
        <Link href="/event-planner/events" className="underline">
          Events
        </Link>
        <span>/</span>
        <Link href={`/event-planner/events/${eventSlug}`} className="underline">
          <span>{currentEvent?.slug ?? "Event not found"}</span>
        </Link>
        <span>/</span>
        <span>Create Seating Chart</span>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl font-bold">
        {currentEvent?.name ?? "Event not found"}
      </h1>
    </div>
  );
}
