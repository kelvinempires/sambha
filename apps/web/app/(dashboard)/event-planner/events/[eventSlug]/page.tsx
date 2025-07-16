// app/event-planner/events/[eventSlug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const EventSlugPage: React.FC = () => {
  const { eventSlug } = useParams();

  const event = {
    id: "abc123",
    name: "Oliver & Emily's Wedding",
  };

  return (
    <div className="p-6 space-y-4">
      <div className="text-sm text-gray-600 space-x-1 flex items-center">
        <Link href="/event-planner/events" className="underline">
          Events
        </Link>
        <span>/</span>
        <h1 className=" font-bold">{event.name}</h1>
      </div>

      <p>This is your EventSlugPage detail page.</p>

      {/* ✅ Button to go to create-sitting */}
      <Link
        href={`/event-planner/events/${eventSlug}/create-sitting-chart`}
        className="inline-block mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Create Sitting Chart
      </Link>
    </div>
  );
};

export default EventSlugPage;




