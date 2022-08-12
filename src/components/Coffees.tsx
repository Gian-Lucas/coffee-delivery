import { Card } from "./Card";

import coffeeImg01 from "../assets/coffee01.svg";
import coffeeImg02 from "../assets/coffee02.svg";
import coffeeImg03 from "../assets/coffee03.svg";

const coffees = [
  {
    id: "1",
    img: coffeeImg01,
    types: ["Tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    quantity: 0,
  },
  {
    id: "3",
    img: coffeeImg03,
    types: ["Especial", "Alcoólico", "Gelado"],
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    quantity: 0,
  },
  {
    id: "2",
    img: coffeeImg02,
    types: ["Tradicional", "Com leite"],
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    quantity: 0,
  },
];

export function Coffees() {
  return (
    <div className="my-14 grid grid-cols-4 gap-x-8 gap-y-10">
      {coffees.map((coffee) => {
        return <Card key={coffee.id} coffee={coffee} />;
      })}
    </div>
  );
}
