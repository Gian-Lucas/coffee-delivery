import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import cupOfCoffee from "../assets/cup-coffee.svg";
import { ItemWithText } from "../components/ItemWithText";

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
            <ItemWithText
              bg="bg-yellow-dark"
              text="Compra simples e segura"
              icon={<ShoppingCart weight="fill" />}
            />
            <ItemWithText
              bg="bg-yellow"
              text="Entrega rápida e rastreada"
              icon={<Timer weight="fill" />}
            />
          </div>
          <div className="flex flex-col gap-5">
            <ItemWithText
              bg="bg-base-text"
              text="Embalagem mantém o café intacto"
              icon={<Package weight="fill" />}
            />
            <ItemWithText
              bg="bg-purple"
              text="O café chega quentinho até você"
              icon={<Coffee weight="fill" />}
            />
          </div>
        </div>
      </div>

      <img src={cupOfCoffee} alt="" />
    </section>
  );
}
