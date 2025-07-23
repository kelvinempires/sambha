"use client";

import React, { useState } from "react";
import { Input } from "@sambha/ui/input";
import { Button } from "@sambha/ui/button";
import { Card as CardIcon } from "@sambha/ui/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@sambha/ui/select";

import { useSetAtom } from "jotai";
import { v4 as uuidv4 } from "uuid";
import { getCardsAtom } from "../../../store/paymentCardAtom";
import { modalAtom } from "../../../store/modalAtom";

const cardNames = [
  "Zenith Gold",
  "Sambha Credit",
  "Visa Classic",
  "Master Platinum",
  "FlexPay Virtual",
];

export const PaymentCard = () => {
  const setCards = useSetAtom(getCardsAtom);
  const setModal = useSetAtom(modalAtom);

  const [form, setForm] = useState({
    number: "",
    expiry: "",
    cvv: "",
    country: "Nigeria",
  });

  const billingAddresses = [
    "Nigeria",
    "Ghana",
    "Kenya",
    "United Kingdom",
    "United States",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "number") {
      const digitsOnly = value.replace(/\D/g, "");
      const formatted = digitsOnly.match(/.{1,4}/g)?.join(" ") ?? "";
      setForm((prev) => ({ ...prev, number: formatted }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const randomName =
      cardNames[Math.floor(Math.random() * cardNames.length)] || "Default Card";

    const newCard = {
      id: uuidv4(),
      name: randomName,
      userName: "Brooklyn Simmons",
      number: form.number,
      expiry: form.expiry,
      cvv: form.cvv,
      country: form.country,
    };

    setCards((prev) => [...prev, newCard]);

    setForm({
      number: "",
      expiry: "",
      cvv: "",
      country: "Nigeria",
    });

    setModal({ isOpen: false });
  };

  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="relative">
          <label className="block text-sm mb-1">Card number</label>
          <Input
            name="number"
            type="text"
            maxLength={19}
            placeholder="0000 0000 0000 0000"
            value={form.number}
            onChange={handleChange}
            className="flex-1 bg-white pr-12 rounded-md outline-none"
          />
          <div className="absolute top-8 right-4">
            <CardIcon />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm mb-1">Expires</label>
            <Input
              name="expiry"
              type="text"
              placeholder="MM/YY"
              value={form.expiry}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 bg-white"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm mb-1">CVV</label>
            <Input
              name="cvv"
              type="text"
              placeholder="123"
              value={form.cvv}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 bg-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Billing address</label>
          <Select
            defaultValue={form.country}
            onValueChange={(val) =>
              setForm((prev) => ({ ...prev, country: val }))
            }
          >
            <SelectTrigger className="w-full py-5">
              <SelectValue placeholder="Billing Address" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {billingAddresses.map((address) => (
                <SelectItem key={address} value={address}>
                  {address}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="text-sm w-full mt-4">
          Add card
        </Button>
      </form>
    </div>
  );
};
