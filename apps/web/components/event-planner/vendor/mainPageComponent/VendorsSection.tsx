"use client"

import Link from "next/link";
import { VendorsSkeleton } from "./VendorsSkeleton";
import { LocationFilter } from "../LocationFilter";
import { VendorsGrid } from "../VendorsGrid";

const categories = [
  { name: "Catering", icon: "🍽️" },
  { name: "AudioVisual", icon: "🎤" },
  { name: "Venue", icon: "🏛️" },
  { name: "Photography", icon: "📷" },
  { name: "Entertainment", icon: "🎭" },
  { name: "Logistics", icon: "🚚" },
  { name: "EventDecor", icon: "🎀" },
];

type VendorsSectionProps = {
  vendors: any[];
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  isLoading?: boolean;
};

export function VendorsSection({
  vendors,
  selectedLocation,
  onLocationChange,
  isLoading = false,
}: VendorsSectionProps): React.ReactElement {
  const filteredVendors = vendors.filter(
    (vendor) =>
      selectedLocation === "All" || vendor.location === selectedLocation
  );

  if (isLoading) {
    return <VendorsSkeleton />;
  }

  return (
    <div className="container mx-auto px-4 bg-white">
      <h1 className="text-3xl font-bold text-[#2a1d52] mb-6">Vendors</h1>

      {/* Location Filter Section */}
      <div className="mb-12">
        <LocationFilter
          selectedLocation={selectedLocation}
          onLocationChange={onLocationChange}
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-4 mr-0 sm:mr-12 lg:mr-40">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/event-planner/vendors/categories/${category.name.toLowerCase()}`}
              className="border border-[#c96fff] bg-[#f9f9f9] rounded-xl p-2 text-center hover:bg-[#f8e9ff] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-[#2a1d52] hover:text-[#c96fff] cursor-pointer text-xs"
            >
              <span className="text-2xl block mb-2">{category.icon}</span>
              <span className="font-medium text-[#2a1d52]">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Vendors Section */}
      <div>
        <h2 className="text-xl font-semibold mb-6 text-[#2a1d52]">
          Popular vendors
        </h2>
        <VendorsGrid
          vendors={filteredVendors}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
          imageHeight="h-82 sm:h-40"
        />
      </div>
    </div>
  );
}
