import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  children: ReactNode;
  asChild: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "text-black text-sm font-sans rounded font-semibold bg-cyan-500 px-4 py-3 w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white"
      )}
    >
      {children}
    </Component>
  );
}
