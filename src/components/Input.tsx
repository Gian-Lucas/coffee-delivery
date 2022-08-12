import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...rest }: InputProps) {
  const style =
    "rounded p-3 bg-base-input border border-base-button focus:outline-yellow-dark placeholder:text-base-label placeholder:text-sm " +
    className;

  console.log(style);
  return <input {...rest} className={style} />;
}
