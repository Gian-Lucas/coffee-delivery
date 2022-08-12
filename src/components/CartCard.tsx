import { Minus, Plus, Trash } from "phosphor-react";
import coffee from "../assets/coffee.svg";

export function CartCard() {
  return (
    <div className="flex gap-5 py-2 pb-[1.875rem] px-1 border-b">
      <img src={coffee} className="w-16" alt="" />

      <div className="flex-1">
        <div className="flex justify-between">
          <span className="text-base-subtitle">Expresso Tradicional</span>
          <strong>R$ 9,90</strong>
        </div>
        <div className="flex gap-2 mt-2">
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
          <div className="flex justify-center items-center text-xs text-purple bg-base-button px-2 gap-1.5 rounded-md cursor-pointer transition-colors hover:bg-base-hover">
            <Trash size={14} weight="bold" />
            <span className="text-base-text">REMOVER</span>
          </div>
        </div>
      </div>
    </div>
  );
}
