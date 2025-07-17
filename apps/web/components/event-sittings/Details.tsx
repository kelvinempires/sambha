"use client";
import React from "react";
import Image from "next/image";
import bgImage from "../../assets/images/bgImage.png";
import adaImage from "../../assets/svgs/addImage.svg";
import avatar from "../../assets/images/avatar.png";
import gradient from "../../assets/images/gradient.png";
import PlusIcon from "components/icons/PlusIcon";
import EditIcon from "components/icons/EditIcon";

function AddButton() {
  return (
    <button className="inline-flex items-center md:w-auto justify-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-primary-darkPurple hover:bg-gray-300 text-sm font-medium transition">
      <PlusIcon className="h-5 w-5" />
      Creator
    </button>
  );
}

export default function Details() {
  const hosts = [  
    {
      id: 1,
      name: "Jenny Wilson (You)",
      description: "jenny@example.com",
      avatar: avatar, // import or path to avatar image
      role: "Creator",
    },
    {
      id: 2,
      name: "Groom’s Name",
      description: "Hgroom’sname@email.com",
      avatar: gradient,
      role: "Manager",
    },
  ];

  return (
    <div className="py-4">
      <div className="flex md:flex-row flex-col gap-4">
        <div className="md:max-w-[60%] w-full">
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
            <div className="space-y-3 flex md:flex-row flex-col justify-between border-b py-4">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-primary-darkPurple">
                  Hosts
                </h2>
                <p className="text-sm text-gray-base">
                  Add event managers to see your event through.
                </p>
              </div>
              <AddButton />
            </div>

            {hosts.map((host) => (
              <div
                key={host.id}
                className="space-y-3 flex md:flex-row flex-col justify-between"
              >
                <div className="flex gap-x-4 items-center">
                  <Image
                    src={host.avatar}
                    alt="Add Image"
                    width={500}
                    height={500}
                    quality={100}
                    className="h-9 w-9 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold text-primary-darkPurple">
                      {host.name}
                    </h2>
                    <p className="text-sm text-gray-base">{host.description}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <button className="text-primary-deepBlue font-medium">
                    {host.role}
                  </button>
                  <button className="text-primary-deepBlue font-medium">
                    <EditIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div>2</div>
      </div>
    </div>
  );
}
