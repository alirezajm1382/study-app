import React from "react";
import type { Metadata } from "next";

// components
import SquaresClient from "@/components/bits/Squares/SquaresClient";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

// metadata
export const metadata: Metadata = {
  title: "Study App",
  description: "For better self-improvement",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-50">
        <SquaresClient
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#000"
        />
      </div>
      {children}
    </div>
  );
}
