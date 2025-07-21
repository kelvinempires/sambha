"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
// import Link from "next/link";

// === Assets ===
import eventImage from "../../../../public/event-planner/background.png";
import back from "../../../../public/event-planner/arrow.png";
import edit from "../../../../public/event-planner/edit2.png";
import themeIcon from "../../../../public/event-planner/theme.png";
import messages from "../../../../public/event-planner/message.png";
import guestsIcon from "../../../../public/event-planner/guest.png";
import image from "../../../../public/event-planner/image1.png";
import location from "../../../../public/event-planner/location.png";
import time from "../../../../public/event-planner/time.png";
import date from "../../../../public/event-planner/date.png";
import sitting from "../../../../public/event-planner/sitting.png";
import map from "../../../../public/event-planner/Full Map.png";
import frame1 from "../../../../public/event-planner/Frame 1.png";
import frame2 from "../../../../public/event-planner/Frame 2.png";
import frame3 from "../../../../public/event-planner/Frame 3.png";
import frame4 from "../../../../public/event-planner/Frame 4.png";

const themes: StaticImageData[] = [frame1, frame2, frame3, frame4];

function ThemeSelector({ selectedTheme, setSelectedTheme }: {
  selectedTheme: StaticImageData | null;
  setSelectedTheme: (theme: StaticImageData) => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-xl max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-[#2A1D52] mb-4">Choose a Theme</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {themes.map((theme, index) => (
            <div
              key={index}
              onClick={() => setSelectedTheme(theme)}
              className={`border-4 rounded-xl overflow-hidden cursor-pointer transition-all ${selectedTheme?.src === theme.src ? "border-[#2A1D52]" : "border-transparent"
                }`}
            >
              <Image src={theme} alt={`Theme ${index + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Page() {
  const status = [
    { stat: "Going", value: 0 },
    { stat: "Pending", value: 0 },
    { stat: "Not going", value: 0 },
  ];

  const edits = [
    { imageUrl: edit, tag: "Edit" },
    { imageUrl: themeIcon, tag: "Theme" },
    { imageUrl: messages, tag: "Messages" },
    { imageUrl: guestsIcon, tag: "Guests" },
  ];

  const tabs = ["Details", "Guests", "Tasks", "Budget"];
  const [activeTab, setActiveTab] = useState("Details");
  const [openTheme, setOpenTheme] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<StaticImageData | null>(null);

  const toggleTheme = () => setOpenTheme((prev) => !prev);

  return (
    <div className="font-fractul p-4">
      <nav className="flex gap-2 text-[#98A2B3] text-lg md:text-xl items-center my-6">
        <Image src={back} alt="back-arrow" />
        <span
          onClick={() => console.log("breadcrumb clicked")}
          className="cursor-pointer hover:underline"
        >
          Events / <span className="text-[#0F2501] font-semibold">Oliver & Emily&apos;s Wedding</span>
        </span>
      </nav>

      <header>
        <ul className="flex text-lg md:text-xl text-[#98A2B3] gap-4 my-6 pb-4 border-b-2 border-black">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer pb-1 border-b-4 transition-all duration-300 ${activeTab === tab ? "text-black border-black" : "text-[#98A2B3] border-transparent"
                }`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </header>

      {activeTab === "Details" && (
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <section>
            <Image
              src={selectedTheme || eventImage}
              alt="Event-Image"
              className="rounded-lg"
            />

            <div className="my-4 flex flex-col md:flex-row justify-between gap-4 pb-4 border-b-2 border-[#98A2B3]">
              <div>
                <h1 className="text-2xl text-[#2A1D52] font-semibold">Hosts</h1>
                <p className="text-[#98A2B3]">Add event manager to see your event through.</p>
              </div>
              <button className="bg-[#98A2B3] text-[#2A1D52] font-semibold text-lg py-2 rounded-3xl w-[150px]">
                + Add host
              </button>
            </div>

            {["Jerry Wilson (You)", "Groom's Name"].map((name, idx) => (
              <div
                key={idx}
                className="mb-4 flex justify-between items-center text-[#98A2B3] pb-4 border-b-2 border-[#98A2B3]"
              >
                <div className="flex gap-2 items-center">
                  <Image src={image} alt="host" />
                  <div>
                    <h2 className="text-[#070D17] font-bold">{name}</h2>
                    <p>{name.toLowerCase().replace(" ", "")}@example.com</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <h2 className="text-[#2B2BCF] font-semibold">{idx === 0 ? "Creator" : "Manager"}</h2>
                  <Image src={edit} alt="edit" height={20} width={20} />
                </div>
              </div>
            ))}

            <div className="mb-4 text-[#98A2B3] pb-4 border-b-2 border-[#98A2B3]">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h1 className="text-2xl font-semibold text-[#2A1D52]">Guests</h1>
                  <p>Add event managers to see your event through</p>
                </div>
                <p className="cursor-pointer">View all &gt;</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {status.map((stat, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <p className="text-[#070D17] text-lg font-semibold">{stat.value}</p>
                    <h2 className="text-[#98A2B3] text-xl">{stat.stat}</h2>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-4 md:mt-0 px-4">
            <h1 className="text-2xl font-semibold mb-2 text-[#2A1D52]">Oliver & Emily&apos;s Wedding</h1>
            <div className="grid gap-3 text-sm my-4 text-[#070D17]">
              <div className="flex items-center gap-2">
                <Image src={location} alt="location" />
                <h2>The Grand Hall. Rosewood Estate</h2>
              </div>
              <div className="flex items-center gap-2">
                <Image src={date} alt="date" />
                <h2>Sat, Aug 20</h2>
              </div>
              <div className="flex items-center gap-2">
                <Image src={time} alt="time" />
                <h2>3:00 PM - 10:00 PM</h2>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-2">
              {edits.map((edit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={edit.tag === "Theme" ? toggleTheme : () => { }}
                >
                  <Image src={edit.imageUrl} alt={edit.tag} />
                  <h2>{edit.tag}</h2>
                </div>
              ))}
            </div>

            <div className="flex flex-col px-6 py-8 bg-gradient-to-b from-[#C96FFF] to-[#2B2BCF] items-center my-4 rounded-lg text-white text-md">
              <div className="flex gap-2 items-center">
                <Image src={sitting} alt="sitting" width={15} height={15} />
                <h2>Create sitting chart</h2>
              </div>
              <p>Assign seats to guests and notify them</p>
            </div>

            <div>
              <h1 className="text-[#2A1D52] text-2xl border-b-2 border-[#E4E7EC] font-semibold my-4">About</h1>
              <p className="text-justify text-[#070D17]">
                Celebrate the union of Oliver and Emily at the beautiful Rosewood Estate. Enjoy a romantic
                ceremony, followed by a gourmet dinner and lively dance. Join us for an evening of love, joy,
                and unforgettable memories as the couple begins their journey together.
              </p>
            </div>

            <div className="mt-6">
              <h1 className="text-[#2A1D52] text-2xl border-b-2 border-[#E4E7EC] font-semibold mb-2">Location</h1>
              <h2 className="text-[#070D17] font-semibold">The Grand Hall, Rosewood Estate</h2>
              <p className="text-[#98A2B3] mb-4">123 Broadway Avenue, NY 10001</p>
              <Image src={map} alt="map" className="max-h-[159px] w-full object-cover rounded-md" />
            </div>
          </section>
        </main>
      )}

      {openTheme && (
        <ThemeSelector selectedTheme={selectedTheme} setSelectedTheme={(theme) => {
          setSelectedTheme(theme);
          setOpenTheme(false);
        }} />
      )}
    </div>
  );
}

export default Page;
