import { createContext, ReactNode, useEffect, useState } from "react";

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
  removeCoffeeFromCart: (coffeeId: string) => void;
  addOneCoffeeUnity: (coffee: Coffee) => void;
  removeOneCoffeeUnity: (coffeeId: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartCoffees, setCartCoffees] = useState<Coffee[]>(() => {
    const cartStoredAsJSON = localStorage.getItem(
      "@coffee-delivery:cart-1.0.0"
    );

    if (cartStoredAsJSON) {
      return JSON.parse(cartStoredAsJSON);
    }

    return [];
  });

  useEffect(() => {
    const cartJSON = JSON.stringify(cartCoffees);

    localStorage.setItem("@coffee-delivery:cart-1.0.0", cartJSON);
  }, [cartCoffees]);

  function clearCart() {
    setCartCoffees([]);
  }

  function addCoffeeToCart(coffee: Coffee) {
    const isCoffeeInCart = cartCoffees.find((cof) => cof.id === coffee.id);

    if (isCoffeeInCart) {
      return;
    }

    const newCoffee: Coffee = {
      ...coffee,
      quantity: 1,
    };

    setCartCoffees((state) => {
      return [...state, newCoffee];
    });
  }

  function removeCoffeeFromCart(coffeeId: string) {
    const cartCoffeesWithoutOneCoffee = cartCoffees.filter(
      (coffee) => coffee.id !== coffeeId
    );

    setCartCoffees(cartCoffeesWithoutOneCoffee);
  }

  function addOneCoffeeUnity(coffee: Coffee) {
    const isCoffeeInCart = cartCoffees.find((cof) => cof.id === coffee.id);

    if (!isCoffeeInCart) {
      addCoffeeToCart(coffee);
      return;
    }

    const cartCoffeesWithOneCoffeeUnityAdded = cartCoffees.map((cof) => {
      if (cof.id === coffee.id) {
        return {
          ...cof,
          quantity: cof.quantity + 1,
        };
      }
      return { ...cof };
    });

    setCartCoffees(cartCoffeesWithOneCoffeeUnityAdded);
  }
  function removeOneCoffeeUnity(coffeeId: string) {
    const coffeeToRemoveOneUnity = cartCoffees.find(
      (coffee) => coffee.id === coffeeId
    );

    if (coffeeToRemoveOneUnity?.quantity === 0) return;

    if (coffeeToRemoveOneUnity?.quantity === 1) {
      removeCoffeeFromCart(coffeeId);
      return;
    }

    const cartCoffeesWithOneCoffeeUnityRemoved = cartCoffees.map((coffee) => {
      if (coffee.id === coffeeId) {
        return {
          ...coffee,
          quantity: coffee.quantity - 1,
        };
      }
      return { ...coffee };
    });

    setCartCoffees(cartCoffeesWithOneCoffeeUnityRemoved);
  }

  return (
    <CartContext.Provider
      value={{
        cartCoffees,
        removeOneCoffeeUnity,
        addOneCoffeeUnity,
        addCoffeeToCart,
        removeCoffeeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
