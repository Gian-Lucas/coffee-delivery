import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from "phosphor-react";
import cupOfCoffee from "../assets/cup-coffee.svg";
import coffee from "../assets/coffee.svg";
import { ItemWithText } from "../components/ItemWithText";

export function Home() {
  return (
    <div className="flex flex-col gap-32 mx-auto mt-20 max-w-[1120px]">
      <section className="flex gap-14 items-center">
        <div className="flex flex-col gap-16">
          <div>
            <h1 className="text-5xl font-header font-extrabold text-base-title leading-tight">
              Encontre o café perfeito <br /> para qualquer hora do dia
            </h1>
            <span className="text-base-subtitle text-xl mt-4 block">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
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

      <main>
        <h1 className="font-header text-base-title text-[2rem]">
          Nossos cafés
        </h1>

        <div className="my-14 flex flex-wrap gap-x-8 gap-y-10">
          <div className="w-64 h-[19.375rem] bg-base-card text-center rounded-tl-md rounded-br-md rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
            <img src={coffee} alt="" className="mx-auto -mt-5" />
            <div className="mt-3 ">
              <span className="py-1 px-2 bg-yellow-light text-yellow-dark rounded-[100px] font-bold text-[.625rem]">
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
                <div className="flex justify-center items-center text-purple bg-base-button         p-2 gap-1.5 rounded-md">
                  <Minus
                    className="transition-colors hover:text-purple-dark cursor-pointer"
                    size={14}
                    weight="bold"
                  />
                  <span className="text-base-title">1</span>
                  <Plus
                    className="transition-colors hover:text-purple-dark cursor-pointer"
                    size={14}
                    weight="bold"
                  />
                </div>
                <div>
                  <button
                    className="transition-colors bg-purple-dark hover:bg-purple p-2 rounded-md text-base-card"
                    title="Mostrar carrinho"
                  >
                    <ShoppingCart size={22} weight="fill" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
