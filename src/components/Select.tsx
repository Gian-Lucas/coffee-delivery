import { ReactNode } from "react";

interface SelectProps {
  icon: ReactNode;
  title: "credit" | "debit" | "money";
  paymentType: "credit" | "debit" | "money";
  changePaymentType: (paymentType: "credit" | "debit" | "money") => void;
}
export const paymentTypes = {
  credit: "Cartão de crédito",
  debit: "Cartão de débito",
  money: "Dinheiro",
};

export function Select({
  icon,
  title,
  paymentType,
  changePaymentType,
}: SelectProps) {
  const isSelected = title === paymentType;

  function handleChangePaymentType() {
    changePaymentType(title);
  }

  if (isSelected) {
    return (
      <div
        onClick={handleChangePaymentType}
        className="hover:bg-base-hover transition-colors cursor-pointer text-purple flex items-center gap-3 p-3 border border-purple bg-base-button rounded-md"
      >
        {icon}
        <span className="text-base-text text-xs">{paymentTypes[title]}</span>
      </div>
    );
  }

  return (
    <div
      onClick={handleChangePaymentType}
      className="hover:bg-base-hover transition-colors cursor-pointer text-purple flex items-center gap-3 p-3 bg-base-button rounded-md"
    >
      {icon}
      <span className="text-base-text text-xs">{paymentTypes[title]}</span>
    </div>
  );
}
