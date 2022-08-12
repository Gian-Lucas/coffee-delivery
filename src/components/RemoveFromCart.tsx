import { Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

interface RemoveFromCartProps {
  coffeeId: string;
}

export function RemoveFromCart({ coffeeId }: RemoveFromCartProps) {
  const { removeCoffeeFromCart } = useContext(CartContext);

  function handleRemoveCoffeeFromCart() {
    removeCoffeeFromCart(coffeeId);
  }

  return (
    <button
      onClick={handleRemoveCoffeeFromCart}
      className="flex justify-center items-center text-xs text-purple bg-base-button px-2 gap-1.5 rounded-md cursor-pointer transition-colors hover:bg-base-hover"
    >
      <Trash size={14} weight="bold" />
      <span className="text-base-text">REMOVER</span>
    </button>
  );
}
