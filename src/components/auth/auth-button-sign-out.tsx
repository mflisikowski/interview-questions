"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function AuthButtonSignOut(): React.JSX.Element {
  return (
    <Button variant="ghost" onClick={ () => signOut() }>
      Sign Out
    </Button>
  )
}
