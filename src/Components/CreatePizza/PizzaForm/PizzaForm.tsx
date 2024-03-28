import SizeRadioButton from "./SizeRadioButton";
import ToppingItem from "./ToppingItem";
import { Pizza } from "../../PizzaContextProvider";

export const toppingItems = [
  "pommes",
  "sås",
  "skinka",
  "kebab",
  "paprika",
  "ananas",
];
const sizeButtons = ["Small", "Medium", "Large"];

type PropList = {
  pizza: Pizza;
  SetPizza: any;
};

const PizzaForm = ({ pizza, SetPizza }: PropList) => {
  return (
    <div className="inputs">
      <fieldset>
        <legend>Välj Storlek</legend>

        {sizeButtons.map((i) => {
          return (
            <SizeRadioButton
              key={i}
              pizza={pizza}
              SetPizza={SetPizza}
              label={i}
            />
          );
        })}
      </fieldset>

      <fieldset>
        <legend>Topping</legend>
        <ul>
          {toppingItems.map((i) => {
            return (
              <ToppingItem key={i} pizza={pizza} SetPizza={SetPizza} name={i} />
            );
          })}
        </ul>
      </fieldset>
    </div>
  );
};

export default PizzaForm;
