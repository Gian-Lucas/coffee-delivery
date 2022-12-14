import { MapPin } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FormContext } from "../contexts/FormContext";
import { CartHeader } from "./CartHeader";

export function Header() {
  const { formData } = useContext(FormContext);
  const { city, uf } = formData;

  return (
    <header className="flex justify-between items-center max-w-[1120px] mx-auto py-8 px-10">
      <Link to="/">
        <img src={logo} alt="Coffee Delivery Logo" />
      </Link>

      <div className="flex justify-end items-center gap-3">
        {city && uf && (
          <div className="flex items-center gap-1 text-sm bg-purple-light text-purple-dark p-2 rounded-lg">
            <MapPin size={22} weight="fill" className="text-purple" />
            <span>
              {city}, {uf}
            </span>
          </div>
        )}

        <CartHeader />
      </div>
    </header>
  );
}
