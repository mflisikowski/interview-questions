import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";
import { User } from "lucide-react";

export default async function AuthUserImage() {
  const session = await getServerSession( authOptions );

  return (
    <Avatar>
      { session ? (
        <AvatarImage src={ session.user.image! } alt={ session.user.name! }/>
      ) : (
        <AvatarFallback>
          <User className="h-6 w-6 stroke-1"/>
        </AvatarFallback>
      ) }
    </Avatar>
  );
}
