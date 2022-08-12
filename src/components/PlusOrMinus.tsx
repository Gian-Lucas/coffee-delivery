import { Minus, Plus } from "phosphor-react";

export function PlusOrMinus() {
  return (
    <div className="flex justify-center items-center text-xs text-purple bg-base-button p-2 gap-3 rounded-md">
      <Minus
        className="transition-colors hover:text-purple-dark cursor-pointer"
        size={14}
        weight="bold"
      />
      <span className="text-base-title">1</span>
      <Plus
        className="transition-colors hover:text-purple-dark cursor-pointer"
        size={14}
        weight="bold"
      />
    </div>
  );
}
