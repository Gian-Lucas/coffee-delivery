import { createContext, ReactNode, useEffect, useState } from "react";

interface FormContextData {
  formData: FormData;
  saveFormData: (data: FormData) => void;
}

export const FormContext = createContext({} as FormContextData);

interface FormContextProviderProps {
  children: ReactNode;
}

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

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [formData, setFormData] = useState(() => {
    const formDataStoredAsJSON = localStorage.getItem(
      "@coffee-delivery:form-data-1.0.0"
    );

    if (formDataStoredAsJSON) {
      return JSON.parse(formDataStoredAsJSON);
    }

    return {} as FormData;
  });

  useEffect(() => {
    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem("@coffee-delivery:form-data-1.0.0", formDataJSON);
  }, [formData]);

  function saveFormData(data: FormData) {
    setFormData(data);
  }

  return (
    <FormContext.Provider value={{ formData, saveFormData }}>
      {children}
    </FormContext.Provider>
  );
}
