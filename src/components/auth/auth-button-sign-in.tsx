"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function AuthButtonSignIn(): React.JSX.Element {
  return (
    <Button variant="ghost" onClick={ () => signIn() }>
      Sign In
    </Button>
  )
}
