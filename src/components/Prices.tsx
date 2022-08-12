import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Prices() {
  const { cartCoffees } = useContext(CartContext);

  const totalItems = Number(
    cartCoffees.reduce((total, coffee) => {
      return total + coffee.price * coffee.quantity;
    }, 0)
  );

  const total = totalItems < 1 ? 0 : totalItems + 3.5;

  const totalItemsFormatted = totalItems
    .toFixed(2)
    .toString()
    .replace(".", ",");
  const totalFormatted = total.toFixed(2).toString().replace(".", ",");

  return (
    <>
      <div className="flex justify-between">
        <span className="text-sm">Total de itens</span>
        <span>R$ {totalItemsFormatted}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm">Entrega</span>
        <span>R$ {totalItems < 1 ? "0,00" : "3,50"}</span>
      </div>
      <div className="flex justify-between">
        <strong className="text-xl">Total</strong>
        <strong className="text-xl">R$ {totalFormatted}</strong>
      </div>
    </>
  );
}
