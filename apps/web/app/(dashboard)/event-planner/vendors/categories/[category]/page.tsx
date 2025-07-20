"use client";

import { notFound } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { vendors } from "../../../../../../lib/vendors";
import { CategorySection } from "../../../../../../_components/event-planner/vendor/CategorySection/CategorySection";
// import { vendors } from "../../../../../../lib/vendors";
// import { CategorySection } from "./CategorySection";

interface CategoryPageProps {
  params: {
    category: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
}

export default function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps): React.JSX.Element {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [vendorsData, setVendorsData] = useState<any[]>([]);

  const categoryName = useMemo(() => {
    if (!params.category) return "";
    return params.category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }, [params.category]);

  const filteredVendors = useMemo(() => {
    return vendorsData.filter((vendor) => {
      const isCorrectCategory =
        vendor.category.toLowerCase() === params.category.toLowerCase();
      const isCorrectLocation =
        selectedLocation === "All" || vendor.location === selectedLocation;
      return isCorrectCategory && isCorrectLocation;
    });
  }, [vendorsData, params.category, selectedLocation]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setVendorsData(vendors);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching vendors:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.category]);

  if (!isLoading && filteredVendors.length === 0) {
    return notFound();
  }

  return (
    <CategorySection
      categoryName={categoryName}
      vendors={filteredVendors}
      selectedLocation={selectedLocation}
      onLocationChange={setSelectedLocation}
      isLoading={isLoading}
    />
  );
}
