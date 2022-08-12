import { Minus, Plus, Trash } from "phosphor-react";
import { Coffee } from "../contexts/CartContext";
import { PlusOrMinus } from "./PlusOrMinus";
import { RemoveFromCart } from "./RemoveFromCart";

type CartCardProps = Coffee;

export function CartCard(coffee: CartCardProps) {
  const { img, title, price, quantity, id } = coffee;
  return (
    <div className="flex gap-5 py-2 pb-[1.875rem] px-1 border-b">
      <img src={img} className="w-16" alt="" />

      <div className="flex-1">
        <div className="flex justify-between">
          <span className="text-base-subtitle">{title}</span>
          <strong>R$ {price.toFixed(2)}</strong>
        </div>
        <div className="flex gap-2 mt-2">
          <PlusOrMinus {...coffee} />
          <RemoveFromCart coffeeId={id} />
        </div>
      </div>
    </div>
  );
}
