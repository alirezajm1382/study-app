"use client";
import React from "react";
import { SquaresProps } from "./Squares";
import Squares from "./Squares";

const SquaresClient: React.FunctionComponent<SquaresProps> = (props) => {
  return <Squares {...props} />;
};

export default SquaresClient;
