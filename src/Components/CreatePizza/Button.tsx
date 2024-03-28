import { useContext } from "react";
import uuid from "react-uuid";
import { Pizza, PizzaContext } from "../PizzaContextProvider";

type PropList = {
  pizza: Pizza;
  SetPizza: any;
};

const Button = ({ pizza, SetPizza }: PropList) => {
  const { dispatch } = useContext(PizzaContext);
  return (
    <button
      className="add-btn"
      onClick={() => {
        dispatch({ type: "ADD", payload: pizza });
        SetPizza({
          id: uuid(),
          size: pizza.size,
          toppings: {},
          totalPrice: 0,
        });

        const checkboxes: NodeListOf<HTMLInputElement> =
          document.querySelectorAll(".topping");

        checkboxes.forEach((box) => {
          box.checked = false;
        });
      }}
    >
      Lägg Till Pizza
    </button>
  );
};

export default Button;
