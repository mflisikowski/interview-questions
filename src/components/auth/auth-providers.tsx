"use client";

import { type ClientSafeProvider, signIn, type SignInOptions } from "next-auth/react";
import { Button } from "@/components/ui/button"

export default function AuthProviders({ providers }: { providers: ClientSafeProvider[] }): React.JSX.Element[] | null {
  const onClickHandlerOptions: SignInOptions = {
    callbackUrl: '/',
    redirect: true,
  }

  if (!providers) {
    return null
  }

  return providers.map( ( provider: ClientSafeProvider ) => (
    <Button
      onClick={ () => signIn( provider.id, onClickHandlerOptions ) }
      className="text-center flex m-auto gap-1"
      key={ provider.name }
      variant="link"
    >
      <span>Sign in with</span>
      <strong>{ provider.name }</strong>
    </Button>
  ) )
}
