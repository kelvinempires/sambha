"use client";
import React from "react";
import Image from "next/image";
import bgImage from "../../assets/images/bgImage.png";
import adaImage from "../../assets/svgs/addImage.svg";
import TeamMembers from "./TeamMembers";
import Link from "next/link";
import { Button } from "@sambha/ui/button";

const event = {
  id: "abc123",
  slug: "oliver-and-emilys-wedding",
  name: "Oliver & Emily's Wedding",
};

function ViewButton() {
  return (
    <button className="flex items-center md:w-auto justify-center gap-2 rounded-full text-gray-base  hover:text-gray-400 text-sm font-medium transition">
      View
      <span>
        <Image
          src="/arrow-right.svg"
          width={20}
          height={20}
          className="w-4 h-4"
          alt="back svg Image"
        />
      </span>
    </button>
  );
}

// details component
export default function Details() {
  return (
    <div className="py-4 w-full">
      <div className="flex flex-col md:flex-row md:gap-4 gap-8 w-full">
        <div className="md:max-w-[658px] w-full">
          <div className="h-[317px] w-full">
            <Image
              src={bgImage}
              alt="Background Image"
              width={500}
              height={500}
              quality={100}
              className="h-full w-full rounded-lg"
            />

            {/* Edit Button */}
            <div className="-mt-14 z-20 justify-center flex w-full whitespace-nowrap">
              <div className="flex items-center">
                <Image
                  src={adaImage}
                  alt="Add Image"
                  width={500}
                  height={500}
                  quality={100}
                  className="h-full w-full rounded-lg"
                />
                <button
                  className=" justify-center z-10 rounded-md bg-white/80 px-4 py-2 text-sm font-medium text-primary-light shadow hover:bg-white"
                  onClick={() => alert("Edit background clicked")}
                >
                  Edit Background
                </button>
              </div>
            </div>
          </div>

          <div className="py-4 space-y-3">
            <TeamMembers />

            {/* table */}
            <div className="flex space-y-3 flex-col">
              <div className="space-y-3 flex justify-between border-b py-4">
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold text-primary-darkPurple">
                    Guests
                  </h2>
                  <p className="text-sm text-gray-base">
                    Add event managers to see your event through.
                  </p>
                </div>
                <ViewButton />
              </div>

              <div className="grid grid-cols-3 w-full">
                <div>
                  <h1>0</h1>
                  <p>Going</p>
                </div>
                <div>
                  <h1>0</h1>
                  <p>Pending</p>
                </div>
                <div>
                  <h1>0</h1>
                  <p>Not going</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Slug-aware navigation */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="font-semibold text-primary-darkPurple text-xl md:text-2xl ">
              {event.name}
            </h1>
            <div className="flex justify-between w-full">
              <div className="flex gap-2">
                <span>icon</span>
                The Grand Hall, Rosewood Estate
              </div>

              <div className="flex gap-2 text-neutral-black test-sm md:text-base ">
                <span>icon</span>
                Sat, Aug 20
              </div>
            </div>
            <div className="flex gap-2">
              <span>icon</span>
              3:00 PM - 10:00 PM
            </div>
          </div>

          <Link
            href={`/event-planner/events/${event.slug}/create-sitting-chart`}
          >
            <Button>Create Sitting Chart</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
