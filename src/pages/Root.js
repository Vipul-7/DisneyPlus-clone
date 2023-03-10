import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Navigation";

const Root = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default Root;
