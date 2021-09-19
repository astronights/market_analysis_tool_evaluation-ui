import React from "react";
import { RouteProps } from "react-router";

const Page: React.FC<RouteProps> = ({ children }) => {
  return <div className="page">{children}</div>;
};

export default Page;
