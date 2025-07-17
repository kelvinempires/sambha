"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@sambha/ui/button";
import Image from "next/image";
import EventTabs from "../../../../../components/event-sittings/EventTab";

const event = {
  id: "abc123",
  slug: "oliver-and-emilys-wedding",
  name: "Oliver & Emily's Wedding",
};

export default function EventSlugPage() {
  return (
    <div className="py-6 space-y-4">
      <div className="text-sm text-gray-600 space-x-2 flex items-center">
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
        <h1 className="font-medium text-green-900 text-sm md:text-base">
          {event.name}
        </h1>
      </div>

      <div>
        <EventTabs />
      </div>

      {/* Button to go to create-sitting */}
      <Link href={`/event-planner/events/${event.slug}/create-sitting-chart`}>
        <Button> Create Sitting Chart</Button>
      </Link>
    </div>
  );
}
