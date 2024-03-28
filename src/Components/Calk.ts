import { Pizza } from "./PizzaContextProvider";

const calcPrice = (pizza: Pizza) => {
  let sizePrice = 0;
  let toppingPrice = 0;
  let trueToppings = Object.keys(pizza.toppings).filter(
    (topping) => pizza.toppings[topping]
  );
  toppingPrice = trueToppings.length * 10;

  switch (pizza.size) {
    case "Small":
      sizePrice = 25;
      break;
    case "Medium":
      sizePrice = 50;
      break;
    case "Large":
      sizePrice = 75;
      break;
    default:
      break;
  }

  pizza.totalPrice = toppingPrice + sizePrice;
  return toppingPrice + sizePrice;
};

export default calcPrice;
