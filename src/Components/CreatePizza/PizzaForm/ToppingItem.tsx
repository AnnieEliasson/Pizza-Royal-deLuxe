import { Pizza } from "../../PizzaContextProvider";

type PropList = {
  pizza: Pizza;
  SetPizza: any;
  name: string;
};

const ToppingItem = ({ pizza, SetPizza, name }: PropList) => {
  return (
    <li>
      <input
        className="topping"
        onClick={(e: any) => {
          let clicked = e.target.id;

          SetPizza({
            ...pizza,
            toppings: {
              ...pizza.toppings,
              [clicked]: !pizza.toppings[clicked],
            },
          });
        }}
        type="checkbox"
        name={name}
        id={name}
      />
      <label htmlFor={name}>{name}</label>
    </li>
  );
};

export default ToppingItem;
