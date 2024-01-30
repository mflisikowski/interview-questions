import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const signInAction = async ( formData: FormData ) => {
  "use server";

  const password = formData.get( "password" ) as string;
  const email = formData.get( "email" ) as string;

  const cookieStore = cookies();
  const supabase = createClient( cookieStore );

  const { error } = await supabase.auth.signInWithPassword( {
    email,
    password,
  } );

  if (error) {
    return redirect( "/sign-in?message=Could not authenticate user" );
  }

  return redirect( "/" );
};