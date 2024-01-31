import { redirect } from "next/navigation";

export const signInAction = async ( formData: FormData ) => {
  "use server";

  const password = formData.get( "password" ) as string;
  const email = formData.get( "email" ) as string

  // Salt the password with base64, temporarily
  const saltedPassword = Buffer.from( password ).toString( "base64" );

  return redirect( "/auth/sign-in?email=" + email + "&password=" + saltedPassword );
};