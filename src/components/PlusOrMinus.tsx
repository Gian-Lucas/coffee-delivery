import { Minus, Plus } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

interface PlusOrMinusProps {
  quantity: number;
  coffeeId: string;
}

export function PlusOrMinus({ quantity, coffeeId }: PlusOrMinusProps) {
  const { addOneCoffeeUnity, removeOneCoffeeUnity } = useContext(CartContext);

  function handleAddOneCoffeeUnity() {
    addOneCoffeeUnity(coffeeId);
  }
  function handleRemoveOneCoffeeUnity() {
    removeOneCoffeeUnity(coffeeId);
  }

  return (
    <div className="flex justify-center items-center text-xs text-purple bg-base-button p-2 gap-3 rounded-md">
      <button
        onClick={handleRemoveOneCoffeeUnity}
        title="Diminuir uma unidade desse item"
      >
        <Minus
          className="transition-colors hover:text-purple-dark cursor-pointer"
          size={14}
          weight="bold"
        />
      </button>
      <span className="text-base-title">{quantity}</span>
      <button
        onClick={handleAddOneCoffeeUnity}
        title="Aumentar uma unidade desse item"
      >
        <Plus
          className="transition-colors hover:text-purple-dark cursor-pointer"
          size={14}
          weight="bold"
        />
      </button>
    </div>
  );
}
