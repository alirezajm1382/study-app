"use client";
import React from "react";

// components
import { Button } from "./ui/button";

// hooks and utils
import { usePathname, useRouter } from "next/navigation";

// icons and styles
import { ArrowLeft, HomeIcon } from "lucide-react";

const AuthLayoutIconButton: React.FunctionComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  return pathname === "/auth" ? (
    <Button
      size="icon"
      onClick={() => router.replace("/")}
      className="absolute top-0 left-0 text-white rounded-md border-1 border-white m-3"
    >
      <HomeIcon />
    </Button>
  ) : (
    <Button
      size="icon"
      onClick={() => router.back()}
      className="absolute top-0 left-0 text-white rounded-md border-1 border-white m-3"
    >
      <ArrowLeft />
    </Button>
  );
};

export default AuthLayoutIconButton;
