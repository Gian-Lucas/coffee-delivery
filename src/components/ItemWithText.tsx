import { ReactNode } from "react";

interface ItemWithTextProps {
  text: string;
  bg: string;

  icon: ReactNode;
}

export function ItemWithText({ icon, text, bg }: ItemWithTextProps) {
  return (
    <div className="flex text-sm items-center gap-3">
      <div
        className={`p-2 bg-base-text text-background rounded-full w-fit ${bg}`}
      >
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
}
