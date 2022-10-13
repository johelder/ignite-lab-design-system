import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex h-12 w-full gap-3 items-center bg-gray-800 px-4 py-3 focus-within:ring-2 ring-cyan-300 rounded">
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="text-gray-400 h-6 w-6">{children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="flex-1 font-sans text-xs outline-none placeholder:text-gray-400 bg-transparent text-gray-100"
      {...props}
    />
  );
}

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
};
