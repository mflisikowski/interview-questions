import { type searchParamsProps } from "@/types";
import { signInAction } from "@/actions/sign-in-action";
import AuthMessage from "@/components/AuthMessage";
import BackButton from "@/components/BackButton";
import FormLabel from "@/components/FormLabel";
import FormInput from "@/components/FormInput";

export default function Login( { searchParams }: { searchParams: searchParamsProps } ) {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <BackButton />

      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action={ signInAction }
      >
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput name="email" type="text" placeholder="user@example.com" required />

        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput name="password" type="passwsord" required />

        <p className="text-center">
          <button className="bg-blue-700 rounded-md px-4 py-2 text-white block w-full">
            Sign In
          </button>

          <span className="block text-sm text-gray-500 my-9">Or</span>

          <a href="/sign-up" className="hover:underline">Sign up</a>
        </p>

        <AuthMessage searchParams={ searchParams }/>
      </form>
    </div>
  );
}
