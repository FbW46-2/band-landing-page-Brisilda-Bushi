/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useLocation } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const location = useLocation();
  return (
    <div className="pageNotFound">
      <h1>Page {location.pathname} not Found!</h1>
      <img src="https://i.gifer.com/1QXw.gif"></img>
    </div>
  );
}

export default PageNotFound;
