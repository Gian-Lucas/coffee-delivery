import { AddToCart } from "./AddToCard";
import { PlusOrMinus } from "./PlusOrMinus";

interface Coffee {
  id: string;
  img: string;
  types: Array<string>;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

interface CardProps {
  coffee: Coffee;
}

export function Card({ coffee }: CardProps) {
  const { id, img, types, title, description, price, quantity } = coffee;

  return (
    <div className="w-64 h-[19.375rem] bg-base-card text-center rounded-tl-md rounded-br-md rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
      <img src={img} alt="" className="mx-auto -mt-5" />
      <div className="mt-3 flex gap-1 justify-center">
        {types.map((type) => {
          return (
            <span
              key={type}
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
          <PlusOrMinus {...coffee} />
          <AddToCart coffee={coffee} />
        </div>
      </div>
    </div>
  );
}
