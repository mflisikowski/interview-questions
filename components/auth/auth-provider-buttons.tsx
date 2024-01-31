"use client"

import { type ExtendedProvider } from "@/types";
import { authOptions } from "@/auth";
import { signIn } from 'next-auth/react';
import { Button } from "@/components/ui/button";
import { Icons } from '@/components/icons';

const AuthProviderButtons: React.FC = () => {
  const providers = authOptions?.providers as ExtendedProvider[];

  const getProviderIcon = ( providerId: string ) => {
    const IconComponent = Icons[providerId as keyof typeof Icons];
    return IconComponent ? <IconComponent className="mr-2 h-4 w-4"/> : null;
  };

  return (
    <>
      { providers.map( ( { id, name }: ExtendedProvider ) => (
        <Button
          onClick={ () => signIn( id, { callbackUrl: '/', redirect: true } ) }
          disabled={ id === 'apple' }
          variant="outline"
          type="button"
          key={ id }
        >
          { getProviderIcon( id ) } { name }
        </Button>
      ) ) }
    </>
  );
};

export default AuthProviderButtons;
