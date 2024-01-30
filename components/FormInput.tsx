import { type FormInputProps } from "@/types";

export default function FormInput( { name, type, placeholder, required }: FormInputProps ) {
  return (
    <input
      className="rounded-md px-4 py-2 bg-inherit border mb-6"
      placeholder={ placeholder }
      required={ required }
      name={ name }
      type={ type }
    />
  );
}