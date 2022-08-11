import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="flex justify-between items-center max-w-[1120px] mx-auto py-8 px-10">
      <img src={logo} alt="Coffee Delivery Logo" />

      <div className="flex justify-end items-center gap-3">
        <div className="flex items-center gap-1 text-sm bg-purple-light text-purple-dark p-2 rounded-lg">
          <MapPin size={22} weight="fill" className="text-purple" />
          <span>Porto Alegre, RS</span>
        </div>

        <div className="flex items-center relative bg-yellow-light rounded-lg p-2">
          <ShoppingCart size={22} weight="fill" className="text-yellow-dark" />
          {true && (
            <span className="flex items-center -right-2 -top-2 absolute w-5 h-5 justify-center text-white font-bold text-xs bg-yellow-dark rounded-full">
              3
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
