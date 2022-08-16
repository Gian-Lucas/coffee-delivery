import { CreditCard, Money, Bank } from "phosphor-react";
import { Select } from "./Select";

interface PaymentMethodProps {
  changePaymentType: (paymentType: "credit" | "debit" | "money") => void;
  paymentType: "credit" | "debit" | "money";
}

export function PaymentMethod(props: PaymentMethodProps) {
  return (
    <div className="mt-8 grid grid-cols-3 gap-3">
      <Select icon={<CreditCard size={16} />} title="credit" {...props} />
      <Select icon={<Money size={16} />} title="debit" {...props} />
      <Select icon={<Bank size={16} />} title="money" {...props} />
    </div>
  );
}
