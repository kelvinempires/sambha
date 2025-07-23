export type Category = "vendor" | "host" | "event";

export interface BaseUser {
  id: string;
  name: string;
  image: string;
  category: Category;
  verified: boolean;
  rate?: string;
  phoneNumber: string;
}

export interface Vendor extends BaseUser {
  category: "vendor";
  serviceCharge?: string;
}

export interface Host extends BaseUser {
  category: "host";
  members?: Member[];
  membersTotal?: number;
  dateCreated?: string;
}

export interface Event extends BaseUser {
  category: "event";
  members?: Member[];
  membersTotal?: number;
  eventDate?: string;
  eventTodo?: number;
  dateCreated?: string;
}

export interface Member {
  name: string;
  id: string;
  image: string;
}

export type User = Vendor | Host | Event;
