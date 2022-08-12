import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartCard } from "./CartCard";

export function CartCards() {
  const { cartCoffees } = useContext(CartContext);

  return (
    <>
      {cartCoffees.map((coffee) => {
        return <CartCard key={coffee.id} {...coffee} />;
      })}
    </>
  );
}
