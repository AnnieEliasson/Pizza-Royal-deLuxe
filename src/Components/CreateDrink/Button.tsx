import { useContext } from "react";
import { Drink, PizzaContext } from "../PizzaContextProvider";
import uuid from "react-uuid";

type PropList = {
  drink: Drink;
  setDrink: any;
};

const Button = ({ drink, setDrink }: PropList) => {
  const { dispatch } = useContext(PizzaContext);
  return (
    <button
      className="add-btn"
      onClick={() => {
        const drinkSizeFrame = document.getElementById(
          "drink-size"
        ) as HTMLElement;
        const drinkNameFrame = document.getElementById(
          "drink-name"
        ) as HTMLElement;

        if (!drink.size) {
          drinkSizeFrame.style.borderColor = "red";
        } else if (!drink.name) {
          drinkNameFrame.style.borderColor = "red";
          console.log("not set");
        } else {
          drinkSizeFrame.style.borderColor = "white";
          drinkNameFrame.style.borderColor = "white";
          dispatch({ type: "ADD-Drink", payload: drink });
          setDrink({
            id: uuid(),
            size: drink.size,
            name: "",
            totalPrice: drink.totalPrice,
          });

          const checkboxes: NodeListOf<HTMLInputElement> =
            document.querySelectorAll(".topping");

          checkboxes.forEach((box) => {
            box.checked = false;
          });
        }
      }}
    >
      Lägg Till Dricka
    </button>
  );
};

export default Button;
