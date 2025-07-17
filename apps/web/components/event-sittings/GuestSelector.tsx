// components/seating-chart/GuestSelector.tsx
"use client";

import React, { useState } from "react";

interface GuestSelectorProps {
  guestId?: string;
}

export default function GuestSelector({
  guestId,
}: GuestSelectorProps) {
  const [selectedGuest, setSelectedGuest] = useState(guestId ?? "");
  const guests = ["John", "Mary", "Alice", "Bob"];

  return (
    <select
      className="text-sm border rounded px-1 py-0.5"
      value={selectedGuest}
      onChange={(e) => setSelectedGuest(e.target.value)}
    >
      <option value="">-- Empty --</option>
      {guests.map((guest) => (
        <option key={guest} value={guest}>
          {guest}
        </option>
      ))}
    </select>
  );
}
