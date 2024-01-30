"use client"

import { Button } from "@/components/ui/button";
import { authOptions } from "@/auth";
import { signIn } from "next-auth/react";
import { type Provider } from "@auth/core/providers";

type ExtendedProvider = Provider & {
  name: string;
  id: string;
}

export default function AuthProviders() {
  const providers = authOptions?.providers as ExtendedProvider[];

  if (!providers) {
    return null
  }

  const onClickHandlerOptions = {
    callbackUrl: '/',
    redirect: true,
  };

  return providers.map(({ id, name }) => (
    <Button
      onClick={() => signIn(id, onClickHandlerOptions)}
      className="text-center flex m-auto gap-1"
      variant="link"
      key={name}
    >
      <span>Sign in with</span>
      <strong>{name}</strong>
    </Button>
  ));
}
