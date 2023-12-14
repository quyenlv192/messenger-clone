"use client";

import React from "react";
import useActiveChannel from "../hooks/useActiveChannel";

const ActiveStatus = () => {
  useActiveChannel();
  return <div></div>;
};

export default ActiveStatus;
