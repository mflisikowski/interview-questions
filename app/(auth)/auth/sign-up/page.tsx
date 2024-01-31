import { Metadata } from "next";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from 'lucide-react';
import { cn } from "@/utils/tailwind/merge";
import Link from "next/link";
import Logo from "@/components/logo";
import { signInAction } from "@/actions/sign-in-action";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
}

const AuthSignInPage: React.FC = () => {
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

          <Link
            className={ cn( buttonVariants( { variant: "ghost" } ), "absolute right-4 top-4 md:right-8 md:top-8" ) }
            href="/auth/sign-in"
          >
            Sign In
          </Link>

          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign Up
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below to continue.
              </p>
            </div>

            <div className="grid gap-6">
              <form className="select-none" action={ signInAction }>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      placeholder="name@example.com"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      type="email"
                      id="email"
                      name={ "email" }
                      disabled={ true }
                    />
                  </div>
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="password">
                      Password
                    </Label>
                    <Input
                      autoComplete="current-password"
                      placeholder="Password"
                      type="password"
                      id="password"
                      name={ "password" }
                      disabled={ true }
                    />
                  </div>
                  <Button variant="ghost" type="button" disabled={ true }>
                    Sign Up
                  </Button>
                </div>
              </form>
            </div>

            {/*<p className="px-8 text-center text-sm text-muted-foreground">*/}
            {/*  By clicking continue, you agree to our <Link href="/terms" className="underline hover:text-primary">Terms*/}
            {/*  of Service</Link> and <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.*/}
            {/*</p>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthSignInPage;
