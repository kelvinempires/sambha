"use client";

import { Vendor } from "../../../../types/vendor";
import { Breadcrumbs } from "../Breadcrumbs";
import { LocationFilter } from "../LocationFilter";
import { VendorsGrid } from "../VendorsGrid";
import { CategorySkeleton } from "./CategorySkeleton";

interface CategorySectionProps {
  icon?: string | React.ReactNode;
  categoryName: string;
  vendors: Vendor[];
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  isLoading?: boolean;
}

export function CategorySection({
  icon,
  categoryName,
  vendors,
  selectedLocation,
  onLocationChange,
  isLoading = false,
}: CategorySectionProps): React.ReactElement {
  if (isLoading) {
    return <CategorySkeleton />;
  }

  // Get the category icon from your categories list if not provided
  const categories = [
 { name: "Catering", icon: "🍽️" },
  { name: "Audio-visual", icon: "🎤" },
  { name: "Venue", icon: "🏛️" },
  { name: "Photography", icon: "📷" },
  { name: "Entertainment", icon: "🎭" },
  { name: "Logistics", icon: "🚚" },
  { name: "Event-decor", icon: "🎀" },
  ];

  const categoryIcon =
    icon || categories.find((c) => c.name === categoryName)?.icon;

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 bg-white">
      <Breadcrumbs
        items={[
          { href: "/event-planner/vendors", label: "Vendors" },
          { label: categoryName, isCurrent: true },
        ]}
      />

      <header className="mb-8 mt-4">
        <div className="flex items-center gap-3">
          {categoryIcon && (
            <span className="text-2xl">
              {typeof categoryIcon === "string" ? categoryIcon : categoryIcon}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {categoryName}
          </h1>
        </div>
      </header>

      <div className="mb-8">
        <LocationFilter
          selectedLocation={selectedLocation}
          onLocationChange={onLocationChange}
        />
      </div>

      {vendors.length > 0 ? (
        <VendorsGrid
          vendors={vendors}
          className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          imageHeight="h-32 sm:h-40"
        />
      ) : (
        <div className="py-12 text-center">
          <p className="text-gray-500">
            No vendors found for this category and location
          </p>
        </div>
      )}
    </div>
  );
}
