"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function EventPage() {
  const { eventSlug } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">
        Event: {decodeURIComponent(eventSlug as string)}
      </h1>
      <p>This is a placeholder event detail page.</p>

      <Link
        href={`/event-planner/events/${eventSlug}`}
        className="inline-block mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Create EventSlugPage 
      </Link>
    </div>
  );
}
