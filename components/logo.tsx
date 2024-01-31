import { LayoutList } from "lucide-react";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div className="flex gap-1">
        <LayoutList className="w-6 h-6" aria-label="Logo"/>
        Interview questions
      </div>
    </Link>
  );
};

export default Logo;
