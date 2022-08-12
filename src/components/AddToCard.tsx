import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext, Coffee } from "../contexts/CartContext";

interface AddToCartProps {
  coffee: Coffee;
}

export function AddToCart({ coffee }: AddToCartProps) {
  const { addCoffeeToCart } = useContext(CartContext);

  function handleAddCoffeeToCart() {
    addCoffeeToCart(coffee);
  }

  return (
    <div>
      <button
        onClick={handleAddCoffeeToCart}
        className="transition-colors bg-purple-dark hover:bg-purple p-2 rounded-md text-base-card"
        title="Adicionar ao carrinho"
      >
        <ShoppingCart size={14} weight="fill" />
      </button>
    </div>
  );
}
