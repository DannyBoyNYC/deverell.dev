import React from "react";
import { Link } from "gatsby";

export const Header = ({ title }) => {
  return (
    <h3 className="page-header">
      <Link to={`/`}>{title}</Link>
    </h3>
  );
};
