import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import {auth} from "@/auth";

export default async function AuthUserImage() {
  const session = await auth();

  return (
    <Avatar>
      { session?.user ? (
        <AvatarImage src={ session.user.image as string } alt={ session.user.name as string }/>
      ) : (
        <AvatarFallback>
          <User className="h-6 w-6 stroke-1"/>
        </AvatarFallback>
      ) }
    </Avatar>
  );
}
