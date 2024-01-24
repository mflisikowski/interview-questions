import type { searchParamsProps } from "@/types";

export default function AuthMessage( { searchParams }: { searchParams: searchParamsProps } ) {
  return (
    searchParams?.message && (
      <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
        { searchParams.message }
      </p>
    )
  )
}
