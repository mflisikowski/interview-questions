import AuthButtonSignOut from "@/components/auth/auth-button-sign-out";
import AuthButtonSignIn from "@/components/auth/auth-button-sign-in";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";

export default async function AuthButton() {
  const session = await getServerSession( authOptions );

  return !session ? <AuthButtonSignIn/> : <AuthButtonSignOut/>;
}
