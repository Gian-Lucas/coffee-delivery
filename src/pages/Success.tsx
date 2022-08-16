import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import coffeeBike from "../assets/coffee-bike.svg";
import { paymentTypes } from "../components/Select";
import { FormContext } from "../contexts/FormContext";

export function Success() {
  const { formData } = useContext(FormContext);
  const { street, city, number, uf, neighborhood, paymentType } = formData;
  return (
    <main>
      <div>
        <h1 className="text-yellow-dark text-[2rem] font-header font-extrabold">
          Uhu! Pedido confirmado
        </h1>
        <p className="text-base-subtitle text-lg">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col items-start w-[33rem] gap-8 p-10 mt-10 border border-yellow rounded-tl-md rounded-br-md rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple text-background rounded-full w-fit">
              <MapPin weight="fill" />
            </div>
            <span className="leading-5">
              Entrega em{" "}
              <strong>
                {street}, {number}
              </strong>{" "}
              <br />
              {neighborhood} - {city}, {uf}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow text-background rounded-full w-fit">
              <Timer weight="fill" />
            </div>
            <span className="leading-5">
              Previsão de entrega <br /> <strong>20 min - 30 min</strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-dark text-background rounded-full w-fit">
              <CurrencyDollar weight="fill" />
            </div>
            <span className="leading-5">
              Pagamento na entrega <br />{" "}
              <strong>{paymentTypes[paymentType]}</strong>
            </span>
          </div>
        </div>

        <img src={coffeeBike} alt="" />
      </div>
    </main>
  );
}
