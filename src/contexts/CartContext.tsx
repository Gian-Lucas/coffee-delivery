import { createContext, ReactNode, useState } from "react";

export interface Coffee {
  id: string;
  img: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartContextData {
  cartCoffees: Coffee[];
  addCoffeeToCart: (coffee: Coffee) => void;
  addOneCoffeeUnity: (coffeeId: string) => void;
  removeOneCoffeeUnity: (coffeeId: string) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartCoffees, setCartCoffees] = useState<Coffee[]>([]);

  function addCoffeeToCart(coffee: Coffee) {
    const isCoffeeInCart = cartCoffees.find((cof) => cof.id === coffee.id);

    if (isCoffeeInCart) {
      console.log(coffee.title, "está no carrinho");
      return;
    }

    const newCoffee: Coffee = {
      ...coffee,
      quantity: 1,
    };

    setCartCoffees((state) => {
      return [...state, newCoffee];
    });

    console.log(coffee.title, "adicionado no carrinho");
  }

  function addOneCoffeeUnity(coffeeId: string) {
    console.log(coffeeId);
  }
  function removeOneCoffeeUnity(coffeeId: string) {
    console.log(coffeeId);
  }

  return (
    <CartContext.Provider
      value={{
        cartCoffees,
        removeOneCoffeeUnity,
        addOneCoffeeUnity,
        addCoffeeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
