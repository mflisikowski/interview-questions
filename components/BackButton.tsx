import { ArrowLeftThin } from "@/components/Icons";
import Link from "next/link";

export default async function BackButton() {
  return (
    <Link
      href="/"
      className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
    >
      <ArrowLeftThin /> Back
    </Link>
  );
}