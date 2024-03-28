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

  return (
    <div className="Create-Pizza">
      <h1>Sätt ihop din Pizza</h1>

      <PizzaForm pizza={pizza} SetPizza={SetPizza} />

      <DisplayPizza pizza={pizza} />

      <Button pizza={pizza} SetPizza={SetPizza} />
    </div>
  );
};

export default CreatePizza;
