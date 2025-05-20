"use client";
import React from "react";
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";
import DecryptedText from "@/components/bits/DecryptedText/DecryptedText";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

// icons and styles
import { HomeIcon } from "lucide-react";

const AuthMainPage: React.FunctionComponent = () => {
  const router = useRouter();
  return (
    <Card className="w-full max-w-sm bg-base-100 shadow-xl m-2 z-1 bg-background">
      <CardHeader>
        <CardTitle>
          <Button
            size="icon"
            onClick={() => router.replace("/")}
            className="absolute top-0 left-0 text-white rounded-md border-1 border-white m-3"
          >
            <HomeIcon />
          </Button>
          <DecryptedText
            parentClassName="text-4xl font-bold font-mono z-1"
            text={`Study App.`}
            animateOn="view"
            speed={100}
            revealDirection="start"
            sequential={true}
          />
        </CardTitle>
        <CardDescription>
          <p>Here you can learn!</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 justify-stretch w-full gap-2 z-1">
          <Link href="/auth/signup" className="grow col-span-2 sm:col-span-1">
            <Button variant="default" className="w-full">
              Sign Up
            </Button>
          </Link>
          <Link
            href="/auth/login"
            className="grow col-span-2 sm:col-span-1 z-1"
          >
            <Button variant="outline" className="w-full">
              Log In
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthMainPage;
