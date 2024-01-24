import { type formLabelProps } from "@/types";

export default function FormLabel( { htmlFor, children }: formLabelProps ) {
  return (
    <label
      htmlFor={ htmlFor }
      className="block text-sm font-medium text-foreground"
    >
      { children }
    </label>
  );
}