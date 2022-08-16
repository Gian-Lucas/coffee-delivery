import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CartCards } from "../components/CartCards";
import { InputGridContainer } from "../components/InputGridContainer";
import { PaymentMethod } from "../components/PaymentMethod";
import { Prices } from "../components/Prices";
import { Select } from "../components/Select";
import { CartContext } from "../contexts/CartContext";
import { FormContext } from "../contexts/FormContext";

interface FormData {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  uf: string;
  paymentType: "credit" | "debit" | "money";
}

const inputStyle =
  "rounded p-3 bg-base-input border border-base-button focus:outline-yellow-dark placeholder:text-base-label placeholder:text-sm ";

export function Checkout() {
  const { saveFormData, formData } = useContext(FormContext);
  const { cartCoffees, clearCart } = useContext(CartContext);
  const { cep, city, neighborhood, number, street, uf, complement } = formData;

  const [paymentType, setPaymentType] = useState<"credit" | "debit" | "money">(
    formData.paymentType ? formData.paymentType : "credit"
  );
  const { register, handleSubmit } = useForm<FormData>();

  const navigate = useNavigate();

  function changePaymentType(paymentType: "credit" | "debit" | "money") {
    setPaymentType(paymentType);
  }

  const handleConfirmSubmit: SubmitHandler<FormData> = (data) => {
    saveFormData({
      ...data,
      paymentType,
    });

    clearCart();
    navigate("/success");
  };

  return (
    <form
      onSubmit={handleSubmit(handleConfirmSubmit)}
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
              <input
                value={cep}
                {...register("cep", { required: true })}
                className={inputStyle + "col-span-3"}
                placeholder="CEP"
              />
            </InputGridContainer>

            <input
              value={street}
              {...register("street", { required: true })}
              placeholder="Rua"
              className={inputStyle}
            />

            <InputGridContainer>
              <input
                value={number}
                {...register("number", { required: true })}
                className={inputStyle + "col-span-3"}
                placeholder="Número"
              />
              <input
                value={complement}
                {...register("complement")}
                className={inputStyle + "col-span-5"}
                placeholder="Complemento (opcional)"
              />
            </InputGridContainer>

            <InputGridContainer>
              <input
                value={neighborhood}
                {...register("neighborhood", { required: true })}
                className={inputStyle + "col-span-3"}
                placeholder="Bairro"
              />
              <input
                value={city}
                {...register("city", { required: true })}
                className={inputStyle + "col-span-4"}
                placeholder="Cidade"
              />
              <input
                value={uf}
                {...register("uf", { required: true })}
                className={inputStyle + "col-span-1"}
                placeholder="UF"
              />
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

          <PaymentMethod
            changePaymentType={changePaymentType}
            paymentType={paymentType}
          />
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

            <button
              disabled={cartCoffees.length === 0}
              className="mt-3 text-sm text-white bg-yellow py-3 px-2 rounded-md transition-colors hover:bg-yellow-dark font-bold disabled:cursor-not-allowed"
            >
              CONFIRMAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
