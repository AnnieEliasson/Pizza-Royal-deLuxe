import uuid from "react-uuid";
import { useState } from "react";
import { Pizza } from "../PizzaContextProvider";
import DisplayPizza from "./DisplayPizza/DisplayPizza";
import calcPrice from "../Calk";
import Button from "./Button";
import PizzaForm, { toppingItems } from "./PizzaForm/PizzaForm";

const CreatePizza = () => {
  const [pizza, SetPizza] = useState<Pizza>({
    id: uuid(),
    size: "",
    toppings: toppingItems.reduce((ac, a) => ({ ...ac, [a]: false }), {}),
    totalPrice: 0,
  });

  calcPrice(pizza);

  const handleClick = () => {
    const createPizza = document.querySelector(".Create-Pizza") as HTMLElement
    const createDrink = document.querySelector(".Create-Drink") as HTMLElement
    createPizza.classList.toggle("active")
    createDrink.classList.toggle("active")
  }

  return (
    <div className="Create-Pizza active">
      <h1>Sätt ihop din Pizza</h1>

      <ul className="flikar">
        <li>Pizza</li>
        <li onClick={handleClick}>Dricka</li>
      </ul>

      <PizzaForm pizza={pizza} SetPizza={SetPizza} />
 

      <DisplayPizza pizza={pizza} />

      <Button pizza={pizza} SetPizza={SetPizza} />
    </div>
  );
};

export default CreatePizza;
