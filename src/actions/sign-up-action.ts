import { cookies, headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const signUpAction = async ( formData: FormData ) => {
  "use server";

  const origin = headers().get( 'origin' );

  const password = formData.get( 'password' ) as string;
  const email = formData.get( 'email' ) as string;

  const cookieStore = cookies();
  const supabase = createClient( cookieStore );

  const { error } = await supabase.auth.signUp( {
    email,
    password,
    options: {
      emailRedirectTo: `${ origin }/auth/callback`,
    },
  } );

  if (error) {
    return redirect( "/sign-in?message=Could not authenticate user" );
  }

  return redirect( "/sign-in?message=Check email to continue sign in process" );
};