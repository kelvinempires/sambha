"use client";

import React, { useState } from "react";

const TABS = ["Details", "Guests", "Tasks", "Budget"];

export default function EventTabs() {
  const [activeTab, setActiveTab] = useState("Details");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Details":
        return <div>Details content goes here.</div>;
      case "Guests":
        return <div>Guests content goes here.</div>;
      case "Tasks":
        return <div>Tasks content goes here.</div>;
      case "Budget":
        return <div>Budget content goes here.</div>;
      default:
        return null;
    }
  };
  return (
    <div className="py-6">
      {/* Tab Headers */}
      <div className="inline-flex border-b border-gray-200 mb-4 space-x-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab
                ? "border-b-2 border-primary-darkPurple text-primary-darkPurple"
                : "text-gray-base hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
}
