"use client";

import { useState, useEffect } from "react";
import { vendors } from "../../../../lib/vendors";
import { VendorsSection } from "../../../../components/event-planner/vendor/mainPageComponent/VendorsSection";
import { Vendor } from "../../../../types/vendor"; // Import your Vendor type

export default function VendorsPage(): React.JSX.Element {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [vendorsData, setVendorsData] = useState<Vendor[]>([]); // Properly typed

  useEffect(() => {
    const fetchData = async () => {
      try {
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
  }, []);

  return (
    <VendorsSection
      vendors={vendorsData}
      selectedLocation={selectedLocation}
      onLocationChange={setSelectedLocation}
      isLoading={isLoading}
    />
  );
}
