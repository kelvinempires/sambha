"use client";

import React, { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";

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

// Theme backgrounds
import frame1 from "../../../../public/event-planner/Frame 1.png";
import frame2 from "../../../../public/event-planner/Frame 2.png";
import frame3 from "../../../../public/event-planner/Frame 3.png";
import frame4 from "../../../../public/event-planner/Frame 4.png";
import frame5 from "../../../../public/event-planner/Frame 5.png";
import frame6 from "../../../../public/event-planner/Frame 6.png";
import frame7 from "../../../../public/event-planner/Frame 7.png";
import frame8 from "../../../../public/event-planner/Frame 8.png";
import frame9 from "../../../../public/event-planner/Frame 9.png";
import frame10 from "../../../../public/event-planner/Frame 10.png";
import frame11 from "../../../../public/event-planner/Frame 11.png";

type ThemeConfig = {
  name: string;
  image: StaticImageData;
  // overlay?: string;
};

const defaultTheme: ThemeConfig = {
  name: "Default",
  image: frame1,
  // overlay: "bg-white/100",
};

const themeConfigs: ThemeConfig[] = [
  { name: "Classic Blue", image: frame1 },
  { name: "Soft Pink", image: frame2 },
  { name: "Vintage", image: frame3 },
  { name: "Modern Black", image: frame4 },
  { name: "Nature Green", image: frame5 },
  { name: "Royal Purple", image: frame6 },
  { name: "Sunset", image: frame7 },
  { name: "Ocean Blue", image: frame8 },
  { name: "Forest", image: frame9 },
  { name: "Golden", image: frame10 },
  { name: "Berry", image: frame11 },
];
function ThemeSelector({ selectedTheme, setSelectedTheme, onClose }: {
  selectedTheme: ThemeConfig | null;
  setSelectedTheme: (theme: ThemeConfig) => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-xl max-w-3xl w-full relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-200 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold text-[#2A1D52] mb-4">Choose a theme</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {themeConfigs.map((theme, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedTheme(theme);
                onClose();
              }}
              className={`border-4 rounded-xl overflow-hidden cursor-pointer transition-all ${selectedTheme?.name === theme.name ? "border-[#2A1D52]" : "border-transparent"
                }`}
            >
              <Image src={theme.image} alt={theme.name} className="w-full h-auto" />
              <p className="text-center text-sm p-2">{theme.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <button
            onClick={() => {
              setSelectedTheme(defaultTheme);
              onClose();
            }}
            className="w-full py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Reset to Default
          </button>
        </div>
        <p className="text-center text-sm mt-6 text-[#2B2BCF] cursor-pointer hover:underline">
          Upload from gallery
        </p>
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
  const [selectedTheme, setSelectedTheme] = useState<ThemeConfig | null>(null);
  const [banner, setBanner] = useState<string | null>(null);
  const [welcomeText] = useState("Celebrate the union of Oliver and Emily at the beautiful Rosewood Estate. Enjoy a romantic ceremony, followed by a gourmet dinner and lively dance. Join us for an evening of love, joy, and unforgettable memories as the couple begins their journey together.");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBanner(e.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const currentTheme = selectedTheme || defaultTheme;

  return (
    <div className="font-fractul min-h-screen">
      {/* Background with theme */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${currentTheme.image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* {currentTheme.overlay && (
          <div className={`absolute inset-0 ${currentTheme.overlay}`} />
        )} */}
      </div>

      {/* Page content (unchanged from original) */}
      <div className="p-4">
        <nav className="flex gap-2 text-[#98A2B3] text-lg md:text-xl items-center my-6">
          <Image src={back} alt="back-arrow" width={20} height={20} />
          <span className="cursor-pointer hover:underline">
            Events / <span className="text-[#0F2501] font-semibold text-lg md:text-2xl">Oliver & Emily&apos;s Wedding</span>
          </span>
        </nav>

        <ul className="flex text-lg md:text-xl text-[#98A2B3] gap-4 my-6 pb-4 border-b-2">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer pb-1 border-b-4 transition-all duration-300 ${activeTab === tab ? "text-[#2A1D52] border-[#2A1D52]" : "text-[#98A2B3] border-transparent"
                }`}
            >
              {tab}
            </li>
          ))}
        </ul>

        {activeTab === "Details" && (
          <main className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <section>
              <div className="relative">
                {banner ? (
                  <Image
                    src={banner}
                    alt="Custom banner"
                    className="w-full rounded-lg object-cover max-h-[400px]"
                    width={800}
                    height={400}
                  />
                ) : (
                  <Image
                    src={eventImage}
                    alt="Default banner"
                    className="w-full rounded-lg object-cover"
                    width={800}
                    height={400}
                  />
                )}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-medium text-[#2A1D52] shadow"
                >
                  Edit background
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleBannerUpload}
                  className="hidden"
                />
              </div>

              <div className="my-4 flex flex-col md:flex-row justify-between gap-4 pb-4 border-b-2 border-[#98A2B3] bg-white p-4 rounded-lg">
                <div>
                  <h1 className="text-2xl text-[#2A1D52] font-semibold">Hosts</h1>
                  <p className="text-[#98A2B3]">Add event manager to see your event through.</p>
                </div>
                <button className="bg-[#98A2B3] text-[#2A1D52] font-semibold text-lg lg:text-md lg:font-semibold lg:h-[50] py-2 rounded-3xl w-[150px]">
                  + Add host
                </button>
              </div>

              {["Jerry Wilson (You)", "Groom's Name"].map((name, idx) => (
                <div
                  key={idx}
                  className="mb-4 flex justify-between items-center text-[#98A2B3] pb-4 border-b-2 border-[#98A2B3] bg-white p-4 rounded-lg"
                >
                  <div className="flex gap-2 items-center">
                    <Image src={image} alt="host" width={40} height={40} />
                    <div>
                      <h2 className="text-[#070D17] font-bold">{name}</h2>
                      <p>{name.toLowerCase().replace(" ", "")}@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <h2 className="text-[#2B2BCF] font-semibold">{idx === 0 ? "Creator" : "Manager"}</h2>
                    <Image src={edit} alt="edit" height={20} width={20} />
                  </div>
                </div>
              ))}

              <div className="mb-4 text-[#98A2B3] pb-4 border-b-2 border-[#98A2B3] bg-white p-4 rounded-lg">
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
              <div className="grid gap-3 text-sm my-4 text-[#070D17] bg-white p-4 rounded-lg">
                <div className="flex items-center gap-2">
                  <Image src={location} alt="location" width={20} height={20} />
                  <h2>The Grand Hall. Rosewood Estate</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={date} alt="date" width={20} height={20} />
                  <h2>Sat, Aug 20</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={time} alt="time" width={20} height={20} />
                  <h2>3:00 PM - 10:00 PM</h2>
                </div>
              </div>

              <div className="grid grid-cols-4 items-center gap-2">
                {edits.map((edit, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center cursor-pointer text-[#070D17] gap-4"
                    onClick={edit.tag === "Theme" ? () => setOpenTheme(true) : () => { }}
                  >
                    <div className="bg-[#EBECEE] rounded-full w-[52px] h-[52px] flex items-center justify-center">
                      <Image src={edit.imageUrl} alt={edit.tag} width={24} height={24} />
                    </div>
                    <h2>{edit.tag}</h2>
                  </div>
                ))}
              </div>

              <div className="flex flex-col px-6 py-8 bg-gradient-to-b from-[#C96FFF] to-[#2B2BCF] items-center my-4 rounded-lg text-white-base">
                <div className="flex gap-2 items-center">
                  <Image src={sitting} alt="sitting" width={15} height={15} />
                  <h2>Create sitting chart</h2>
                </div>
                <p>Assign seats to guests and notify them</p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h1 className="text-[#2A1D52] text-2xl border-b-2 border-[#E4E7EC] font-semibold my-4">About</h1>
                <p className="text-justify text-[#070D17] whitespace-pre-line">
                  {welcomeText}
                </p>
              </div>

              <div className=" bg-white p-4 rounded-lg">
                <h1 className="text-[#2A1D52] text-2xl border-b-2 border-[#E4E7EC] font-semibold mb-2">Location</h1>
                <h2 className="text-[#070D17] font-semibold">The Grand Hall, Rosewood Estate</h2>
                <p className="text-[#98A2B3] mb-4">123 Broadway Avenue, NY 10001</p>
                <Image src={map} alt="map" className="max-h-[159px] w-full object-cover rounded-md" width={600} height={159} />
              </div>
            </section>
          </main>
        )}
      </div>

      {openTheme && (
        <ThemeSelector
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
          onClose={() => setOpenTheme(false)}
        />
      )}
    </div>
  );
}

export default Page;