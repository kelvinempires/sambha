"use client";

import { Button } from "@sambha/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function EventPage() {
  const { eventSlug } = useParams();

  return (
    <div className="p-6">
      <h1 className=" font-bold">Event:</h1>
      <p>This is a placeholder event detail page.</p>

      <Link href={`/event-planner/events/${eventSlug}`}>
        <Button> Create EventSlugPage</Button>
      </Link>
    </div>
  );
}
