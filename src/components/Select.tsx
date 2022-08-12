import { ReactNode } from "react";

interface SelectProps {
  icon: ReactNode;
  title: string;
  isSelected: boolean;
}

export function Select({ icon, title, isSelected }: SelectProps) {
  if (isSelected) {
    return (
      <div className="hover:bg-base-hover transition-colors cursor-pointer text-purple flex items-center gap-3 p-3 border border-purple bg-base-button rounded-md">
        {icon}
        <span className="text-base-text text-xs">{title}</span>
      </div>
    );
  }

  return (
    <div className="hover:bg-base-hover transition-colors cursor-pointer text-purple flex items-center gap-3 p-3 bg-base-button rounded-md">
      {icon}
      <span className="text-base-text text-xs">{title}</span>
    </div>
  );
}
