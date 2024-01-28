import { type ClientSafeProvider, getProviders } from "next-auth/react";

export const authProviders = async () => {
  const authProviders: Record<string, ClientSafeProvider> | null = await getProviders()

  if (!authProviders) {
    return []
  }

  return Object.values( authProviders ) || []
}
