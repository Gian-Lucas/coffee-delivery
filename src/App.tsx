import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";
import { FormContextProvider } from "./contexts/FormContext";
import { Router } from "./Router";
import "./styles/global.css";

export function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <FormContextProvider>
          <Router />
        </FormContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}
