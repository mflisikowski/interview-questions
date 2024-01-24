import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const signOutAction = async () => {
  "use server";

  const cookieStore = cookies();
  const supabase = createClient( cookieStore );

  await supabase.auth.signOut();

  return redirect( "/sign-in" );
};