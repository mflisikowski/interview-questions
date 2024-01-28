import type { ClientSafeProvider } from "next-auth/react";
import { authProviders } from "@/utils/next-auth/providers";
import AuthProviders from "@/components/auth/auth-providers";
import BackButton from "@/components/BackButton";
import { signInAction } from "@/actions/sign-in-action";
import FormLabel from "@/components/FormLabel";
import FormInput from "@/components/FormInput";

// import AuthMessage from "@/components/AuthMessage"
// <AuthMessage searchParams={ searchParams }/>

export default async function SignIn() {
  const providers: ClientSafeProvider[] = await authProviders()

  return (

    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <BackButton/>

      <div className="animate-in w-full justify-center gap-2 text-foreground">
        <form action={ signInAction } className="w-full flex-1 flex flex-col">
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput name="email" type="text" placeholder="user@example.com" required/>

          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput name="password" type="passwsord" required/>

          <button className="bg-blue-700 rounded-md px-4 py-2 text-white block w-full text-center">
            Sign In
          </button>
        </form>

        { providers && (
          <>
            <span className="block text-sm text-gray-500 my-9 text-center">Or</span>
            <AuthProviders providers={ providers }/></>
        ) }
      </div>
    </div>
  );
}
