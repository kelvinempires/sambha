import React from "react";

import ProtectedRoute from "../../../utils/ProtectedRoutes";

export default function PlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedRoute role="planner">{children}</ProtectedRoute>;
}
