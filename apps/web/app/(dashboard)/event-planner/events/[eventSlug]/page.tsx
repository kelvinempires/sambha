"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@sambha/ui/button";

const event = {
  id: "abc123",
  slug: "oliver-and-emilys-wedding",
  name: "Oliver & Emily's Wedding",
};

export default function EventSlugPage() {
  return (
    <div className="p-6 space-y-4">
      <div className="text-sm text-gray-600 space-x-1 flex items-center">
        <Link href="/event-planner/events" className="underline">
          Events
        </Link>
        <span>/</span>
        <h1 className="font-bold">{event.name}</h1>
      </div>

      <p>This is your EventSlugPage detail page.</p>

      {/* Button to go to create-sitting */}
      <Link href={`/event-planner/events/${event.slug}/create-sitting-chart`}>
        <Button> Create Sitting Chart</Button>
      </Link>
    </div>
  );
}
