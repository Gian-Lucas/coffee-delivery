import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import cupOfCoffee from "../assets/cup-coffee.svg";

export function Home() {
  return (
    <section className="flex gap-14 items-center mx-auto mt-20 max-w-[1120px]">
      <div className="flex flex-col gap-16">
        <div>
          <h1 className="text-5xl font-header font-extrabold text-base-title leading-tight">
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <span className="text-base-subtitle text-xl mt-4 block">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-dark text-background rounded-full w-fit ">
                <ShoppingCart weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow text-background rounded-full w-fit ">
                <Timer weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-base-text text-background rounded-full w-fit ">
                <Package weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple text-background rounded-full w-fit ">
                <Coffee weight="fill" />
              </div>
              <span>O café chega quentinho até você</span>
            </div>
          </div>
        </div>
      </div>

      <img src={cupOfCoffee} alt="" />
    </section>
  );
}
