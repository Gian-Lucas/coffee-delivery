import { Minus, Plus } from "phosphor-react";
import { useContext } from "react";
import { CartContext, Coffee } from "../contexts/CartContext";

type PlusOrMinusProps = Coffee;

export function PlusOrMinus(coffee: PlusOrMinusProps) {
  const { id } = coffee;
  const { addOneCoffeeUnity, removeOneCoffeeUnity, cartCoffees } =
    useContext(CartContext);

  function handleAddOneCoffeeUnity() {
    addOneCoffeeUnity(coffee);
  }
  function handleRemoveOneCoffeeUnity() {
    removeOneCoffeeUnity(id);
  }

  const quantity = cartCoffees.find((cof) => cof.id === id)?.quantity;

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
      <span className="text-base-title">{quantity ? quantity : 0}</span>
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
