"use client";

import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { getVendorById } from "../../../../../../lib/vendors";
import { Breadcrumbs } from "../../../../../../_components/event-planner/vendor/Breadcrumbs";
import { ImageGallery } from "../../../../../../_components/event-planner/vendor/ImageGallery";
import { VendorHeader } from "../../../../../../_components/event-planner/vendor/vendorView/VendorHeader";
import { VendorActions } from "../../../../../../_components/event-planner/vendor/vendorView/VendorActions";
import { VendorReviews } from "../../../../../../_components/event-planner/vendor/vendorView/VendorReviews";
import { VendorDetails } from "../../../../../../_components/event-planner/vendor/vendorView/VendorDetails";
import { use } from "react";
import { CheckCircle } from "lucide-react";
export default function VendorPage({
  params,
}: {
  params: Promise<{ vendorId: string }>;
}): React.JSX.Element {
  // Unwrap the params promise
  const { vendorId } = use(params);
  const vendor = getVendorById(vendorId);

  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setImages([
          "/images/product1.jpg",
          "/images/product2.jpg",
          "/images/product3.jpg",
          "/images/product4.jpg",
        ]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (!vendor) return notFound();

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <Breadcrumbs
        items={[
          { href: "/event-planner/vendors", label: "Vendors" },
          { label: vendor.name, isCurrent: true },
        ]}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Left Column - Images */}
        <div>
          <ImageGallery
            images={vendor.images}
            mainImageHeight="h-96"
            thumbnailHeight="h-24"
            thumbnailWidth="w-20"
            isLoading={isLoading}
            mainImageWidth="w-full md:w-[365px]"
            thumbnailCount={4}
          />
        </div>

        {/* Right Column - Vendor Info */}
        <div>
          <div className="sticky top-4">
            <div className="bg-white p-4">
              <VendorHeader vendor={vendor} />

              {/* Message Form */}
              <div className="mb-4 bg-[#f9f9f9] p-4 rounded-lg">
                <h3 className="text-gray-600 mb-2 text-sm font-semibold">
                  Send vendor a message
                </h3>
                <div className="relative flex items-center">
                  <textarea
                    className="w-full p-3 bg-[#f2f2f2] rounded text-gray-500 text-sm pr-16 resize-none h-10"
                    placeholder="Type your message..."
                    rows={1}
                  />
                  <button className="absolute right-3 bg-[#ebecee] text-gray-400 text-sm py-1 px-4 rounded-full hover:bg-[#c96fff] transition-colors">
                    Send
                  </button>
                </div>
              </div>

              <VendorActions vendorId={vendor.id} />

              <div className="mt-4">
                <h2 className="text-gray-700 font-semibold mb-2 border-y-[1px] border-gray-200 pb-1 pt-3">
                  Description
                </h2>
                <p className="text-gray-800 text-sm">{vendor.description}</p>
              </div>

              <VendorReviews vendor={vendor} />

              <VendorDetails vendor={vendor} />

              {/* Map placeholder */}
              <div className="w-full h-[150px] sm:h-[200px] overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.362974706922!2d3.3494461735047723!3d6.601734522252316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9230fc4fc853%3A0xd8babb191dac2f6b!2sAllen%20Ave%2C%20Allen%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1729671204756!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {vendor.verified && (
                <div className="p-6 border border-gray-200 rounded-lg mt-4 shadow-sm">
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <CheckCircle className="w-5 h-5 text-[#0e7b33]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-bold">
                          Verified vendor
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        This vendor was verified on{" "}
                        {new Date(vendor.verifiedDate)
                          .toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })
                          .replace(/\//g, "/")}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
