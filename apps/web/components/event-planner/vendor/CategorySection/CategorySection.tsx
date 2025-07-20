"use client";

import { Breadcrumbs } from "../Breadcrumbs";
import { LocationFilter } from "../LocationFilter";
import { VendorsGrid } from "../VendorsGrid";
import { CategorySkeleton } from "./CategorySkeleton";

interface CategorySectionProps {
  categoryName: string;
  vendors: any[];
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  isLoading?: boolean;
}

export function CategorySection({
  categoryName,
  vendors,
  selectedLocation,
  onLocationChange,
  isLoading = false,
}: CategorySectionProps): React.ReactElement {
  if (isLoading) {
    return <CategorySkeleton />;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 bg-white">
      <Breadcrumbs
        items={[
          { href: "/event-planner/vendors", label: "Vendors" },
          { label: categoryName, isCurrent: true },
        ]}
      />

      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {categoryName}
        </h1>
      </header>

      <div className="mb-8">
        <LocationFilter
          selectedLocation={selectedLocation}
          onLocationChange={onLocationChange}
        />
      </div>

      <div className="mb-8">
        <VendorsGrid
          vendors={vendors}
          className="grid-cols-2 sm:grid-cols-2 lg:grid-cols-5"
          imageHeight="h-32 sm:h-40"
          
        />
      </div>
    </div>
  );
}
