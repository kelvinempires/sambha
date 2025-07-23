import type { ColumnDef } from "@tanstack/react-table";

import { HostedType } from "../../../types/profile/data";
import { formatFlexibleDate } from "../../../utils/formatMessageDate";

export const columns: ColumnDef<HostedType>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const data = row.original;
      return <p className="whitespace-nowrap font-semibold">{data.name}</p>;
    },
  },
  {
    accessorKey: "host",
    header: "Host",
  },

  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const data = row.original;
      const formattedDate = formatFlexibleDate(data.date, {
        formatStyle: "weekday",
      });

      return (
        <div className="flex whitespace-nowrap flex-col">
          <span>{formattedDate}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "todo",
    header: "To-do",
  },
  {
    accessorKey: "vanue",
    header: "Venue",
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="flex items-center gap-4">
          <button
            className="bg-gradientText bg-clip-text whitespace-nowrap text-transparent cursor-pointer text-primary-light"
            onClick={() => console.log(data)}
          >
            View Details
          </button>
        </div>
      );
    },
  },
];
