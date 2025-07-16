// components/seating-chart/SeatItem.tsx
"use client";

import React from "react";
import GuestSelector from "./GuestSelector";

interface SeatItemProps {
  seatId: string;
  guestId?: string;
}

export default function SeatItem({
//   seatId,
  guestId,
}: SeatItemProps) {
  return (
    <div className="relative w-16 h-16 rounded-full bg-white border flex items-center justify-center">
      <GuestSelector guestId={guestId} />
    </div>
  );
}
