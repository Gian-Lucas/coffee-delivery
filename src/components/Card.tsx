import { Minus, Plus, ShoppingCart } from "phosphor-react";
import coffee from "../assets/coffee.svg";
import { PlusOrMinus } from "./PlusOrMinus";

interface CardProps {
  id: string;
  img: string;
  types: Array<string>;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export function Card({
  id,
  img,
  types,
  title,
  description,
  price,
  quantity,
}: CardProps) {
  return (
    <div className="w-64 h-[19.375rem] bg-base-card text-center rounded-tl-md rounded-br-md rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
      <img src={img} alt="" className="mx-auto -mt-5" />
      <div className="mt-3 flex gap-1 justify-center">
        {types.map((type) => {
          return (
            <span
              className="py-1 px-2 bg-yellow-light text-yellow-dark rounded-[100px] 
        font-bold text-[.625rem]"
            >
              {type.toUpperCase()}
            </span>
          );
        })}
      </div>

      <h1 className="mt-4 font-header text-xl text-base-subtitle">{title}</h1>

      <p className="mt-2 mx-5 text-base-label text-sm">{description}</p>

      <div className="mt-8 mx-6 mb-5 flex items-center justify-between">
        <div className="text-base-text">
          <span className="text-sm">R$ </span>
          <strong className="font-extrabold font-header text-2xl leading-8">
            {price.toFixed(2)}
          </strong>
        </div>
        <div className="flex items-center gap-2">
          <PlusOrMinus quantity={quantity} />
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
