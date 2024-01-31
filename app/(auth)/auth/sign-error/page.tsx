import { Metadata } from "next";
import Logo from '@/components/logo';
import Link from 'next/link';
import { cn } from "@/utils/tailwind/merge";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Frown } from 'lucide-react';

export const metadata: Metadata = {
  title: "Sign-In Error",
  description: "An error occurred during the sign-in process. Please try again."
}

const SignInErrorPage: React.FC = () => {
  return (
    <>
      <div
        className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900"/>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Logo/>
          </div>
        </div>

        <div className="relative lg:p-8 h-full flex items-center">
          <Link
            className={ cn( buttonVariants( { variant: "ghost" } ), "absolute left-4 top-4 md:left-8 md:top-8" ) }
            href="/"
          >
            <ChevronLeft/> Back
          </Link>

          <div
            className={ cn( buttonVariants( { variant: "ghost" } ), "absolute right-4 top-4 md:right-8 md:top-8 flex h-5 items-center space-x-1" ) }
          >
            <Link className={ cn( buttonVariants( { variant: "ghost" } ) ) } href="/auth/sign-in">
              Sign In
            </Link>

            <Separator orientation="vertical"/>

            <Link className={ cn( buttonVariants( { variant: "ghost" } ) ) } href="/auth/sign-up">
              Sign Up
            </Link>
          </div>


          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex items-center justify-center">
              <Frown className="w-52 h-52"/>
            </div>

            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign Error
              </h1>
              <p className="text-sm text-muted-foreground">
                An error occurred during the auth process. <br/>
                Please try again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInErrorPage;
