"use client";
import SquaresClient from "@/components/bits/Squares/SquaresClient";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-50 bg-black">
        <SquaresClient
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#333"
        />
      </div>
    </div>
  );
}
