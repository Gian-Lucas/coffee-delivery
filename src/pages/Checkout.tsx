import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import coffee from "../assets/coffee.svg";
import { Input } from "../components/Input";
import { InputGridContainer } from "../components/InputGridContainer";

export function Checkout() {
  return (
    <form className="grid grid-cols-5 gap-8" action="">
      <div className="col-span-3">
        <h1 className="font-header font-bold text-lg text-base-subtitle">
          Complete seu pedido
        </h1>

        <div className="bg-base-card rounded-md p-10 mt-4">
          <header className="flex items-start gap-2">
            <div className="text-yellow-dark">
              <MapPinLine size={22} />
            </div>

            <div>
              <span className="text-base-subtitle">Endereço de entrega</span>
              <br />
              <span className="text-sm">
                Informe o endereço onde deseja receber seu pedido
              </span>
            </div>
          </header>

          <div className="mt-8 flex flex-col gap-4">
            <InputGridContainer>
              <Input className="col-span-3" placeholder="CEP" />
            </InputGridContainer>

            <Input placeholder="Rua" />

            <InputGridContainer>
              <Input className="col-span-3" placeholder="Número" />
              <Input
                className="col-span-5"
                placeholder="Complemento (opcional)"
              />
            </InputGridContainer>

            <InputGridContainer>
              <Input className="col-span-3" placeholder="Bairro" />
              <Input className="col-span-4" placeholder="Cidade" />
              <Input className="col-span-1" placeholder="UF" />
            </InputGridContainer>
          </div>
        </div>

        <div className="bg-base-card rounded-md p-10 mt-3 mb-10">
          <header className="flex items-start gap-2">
            <div className="text-purple">
              <CurrencyDollar size={22} />
            </div>

            <div>
              <span className="text-base-subtitle">Pagamento</span>
              <br />
              <span className="text-sm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </header>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {true ? (
              <div className="hover:bg-base-hover transition-colors cursor-pointer text-purple flex items-center gap-3 p-3 border border-purple bg-base-button rounded-md">
                <CreditCard size={16} />
                <span className="text-base-text text-xs">
                  CARTÃO DE CRÉDITO
                </span>
              </div>
            ) : (
              <div className="hover:bg-base-hover transition-colors cursor-pointer text-purple flex items-center gap-3 p-3 bg-base-button rounded-md">
                <CreditCard size={16} />
                <span className="text-base-text text-xs">
                  CARTÃO DE CRÉDITO
                </span>
              </div>
            )}
            <div className="hover:bg-base-hover transition-colors cursor-pointer text-purple flex items-center gap-3 p-3 bg-base-button rounded-md">
              <Money size={16} />
              <span className="text-base-text text-xs">CARTÃO DE DÉBITO</span>
            </div>
            <div className="hover:bg-base-hover transition-colors cursor-pointer text-purple flex items-center gap-3 p-3 bg-base-button rounded-md">
              <Bank size={16} />
              <span className="text-base-text text-xs">DINHEIRO</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2">
        <h1 className="font-header font-bold text-lg text-base-subtitle">
          Cafés selecionados
        </h1>

        <div className="flex flex-col gap-6 bg-base-card p-10 mt-4 rounded-tl-md rounded-br-md rounded-tr-[2.75rem] rounded-bl-[2.75rem]">
          <div className="flex gap-5 py-2 pb-[1.875rem] px-1 border-b">
            <img src={coffee} className="w-16" alt="" />

            <div className="flex-1">
              <div className="flex justify-between">
                <span className="text-base-subtitle">Expresso Tradicional</span>
                <strong>R$ 9,90</strong>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="flex justify-center items-center text-xs text-purple bg-base-button p-2 gap-3 rounded-md">
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
                <div className="flex justify-center items-center text-xs text-purple bg-base-button px-2 gap-1.5 rounded-md cursor-pointer transition-colors hover:bg-base-hover">
                  <Trash size={14} weight="bold" />
                  <span className="text-base-text">REMOVER</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 py-2 pb-[1.875rem] px-1 border-b">
            <img src={coffee} className="w-16" alt="" />

            <div className="flex-1">
              <div className="flex justify-between">
                <span className="text-base-subtitle">Expresso Tradicional</span>
                <strong>R$ 9,90</strong>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="flex justify-center items-center text-xs text-purple bg-base-button p-2 gap-3 rounded-md">
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
                <div className="flex justify-center items-center text-xs text-purple bg-base-button px-2 gap-1.5 rounded-md cursor-pointer transition-colors hover:bg-base-hover">
                  <Trash size={14} weight="bold" />
                  <span className="text-base-text">REMOVER</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <span className="text-sm">Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className="flex justify-between">
              <strong className="text-xl">Total</strong>
              <strong className="text-xl">R$ 33,20</strong>
            </div>

            <button className="mt-3 text-sm text-white bg-yellow py-3 px-2 rounded-md transition-colors hover:bg-yellow-dark font-bold">
              CONFIRMAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
