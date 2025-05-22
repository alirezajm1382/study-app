"use client";
import React from "react";
import Squares, { SquaresProps } from "./Squares";

const SquaresClient: React.FunctionComponent<SquaresProps> = (props) => {
  return <Squares {...props} />;
};

export default SquaresClient;
