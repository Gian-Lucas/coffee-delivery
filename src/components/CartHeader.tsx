import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export function CartHeader() {
  const hasItemsInCart = true;

  return (
    <Link
      to="/checkout"
      className="flex items-center relative bg-yellow-light rounded-lg p-2"
    >
      <ShoppingCart size={22} weight="fill" className="text-yellow-dark" />
      {hasItemsInCart && (
        <span className="flex items-center -right-2 -top-2 absolute w-5 h-5 justify-center text-white font-bold text-xs bg-yellow-dark rounded-full">
          3
        </span>
      )}
    </Link>
  );
}
