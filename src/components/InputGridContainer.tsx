import { ReactNode } from "react";

interface InputGridContainerProps {
  children: ReactNode;
}

export function InputGridContainer({ children }: InputGridContainerProps) {
  return <div className="grid grid-cols-8 gap-3">{children}</div>;
}
