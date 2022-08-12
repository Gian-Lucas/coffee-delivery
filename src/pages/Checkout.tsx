import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { FormEvent } from "react";
import { CartCards } from "../components/CartCards";
import { Input } from "../components/Input";
import { InputGridContainer } from "../components/InputGridContainer";
import { Prices } from "../components/Prices";
import { Select } from "../components/Select";

export function Checkout() {
  function handleConfirmSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleConfirmSubmit}
      className="grid grid-cols-5 gap-8"
      action=""
    >
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
            <Select
              icon={<CreditCard size={16} />}
              title="CARTÃO DE CRÉDITO"
              isSelected={false}
            />
            <Select
              icon={<Money size={16} />}
              title="CARTÃO DE DÉBITO"
              isSelected={true}
            />
            <Select
              icon={<Bank size={16} />}
              title="DINHEIRO"
              isSelected={false}
            />
          </div>
        </div>
      </div>

      <div className="col-span-2">
        <h1 className="font-header font-bold text-lg text-base-subtitle">
          Cafés selecionados
        </h1>

        <div className="flex flex-col gap-6 bg-base-card p-10 mt-4 rounded-tl-md rounded-br-md rounded-tr-[2.75rem] rounded-bl-[2.75rem]">
          <CartCards />

          <div className="flex flex-col gap-3">
            <Prices />

            <button className="mt-3 text-sm text-white bg-yellow py-3 px-2 rounded-md transition-colors hover:bg-yellow-dark font-bold">
              CONFIRMAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
