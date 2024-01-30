import AuthButtonSignOut from "@/components/auth/auth-button-sign-out";
import AuthButtonSignIn from "@/components/auth/auth-button-sign-in";
import { auth } from "@/auth";

export default async function AuthButton() {
  const session = await auth()

  return session?.user
    ? <AuthButtonSignOut/>
    : <AuthButtonSignIn/>
}
