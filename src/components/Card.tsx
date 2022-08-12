import { Minus, Plus, ShoppingCart } from "phosphor-react";
import coffee from "../assets/coffee.svg";
import { PlusOrMinus } from "./PlusOrMinus";

export function Card() {
  return (
    <div className="w-64 h-[19.375rem] bg-base-card text-center rounded-tl-md rounded-br-md rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
      <img src={coffee} alt="" className="mx-auto -mt-5" />
      <div className="mt-3 ">
        <span
          className="py-1 px-2 bg-yellow-light text-yellow-dark rounded-[100px] 
        font-bold text-[.625rem]"
        >
          TRADICIONAL
        </span>
      </div>

      <h1 className="mt-4 font-header text-xl text-base-subtitle">
        Expresso Tradicional
      </h1>

      <p className="mt-2 mx-5 text-base-label text-sm">
        O tradicional café feito com água quente e grãos moídos
      </p>

      <div className="mt-8 mx-6 mb-5 flex items-center justify-between">
        <div className="text-base-text">
          <span className="text-sm">R$ </span>
          <strong className="font-extrabold font-header text-2xl leading-8">
            9,90
          </strong>
        </div>
        <div className="flex items-center gap-2">
          <PlusOrMinus />
          <div>
            <button
              className="transition-colors bg-purple-dark hover:bg-purple p-2 rounded-md text-base-card"
              title="Mostrar carrinho"
            >
              <ShoppingCart size={14} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
