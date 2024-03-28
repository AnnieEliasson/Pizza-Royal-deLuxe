import { Pizza } from "../../PizzaContextProvider";

type PropList = {
  pizza: Pizza;
};

const DisplayPizza = ({ pizza }: PropList) => {
  return (
    <div className="your-pizza">
      <h2>Din Pizza:</h2>
      <p>
        <span>Storlek: </span> {pizza.size}
      </p>

      <p>
        <span>Toppings: </span>

        {Object.keys(pizza.toppings).map((key) => {
          return (
            <span key={key} className="topping-items">
              {pizza.toppings[key] ? `${key}, ` : ""}
            </span>
          );
        })}
      </p>

      <p className="price">
        <b>Pris: {pizza.totalPrice}kr.</b>
      </p>
    </div>
  );
};

export default DisplayPizza;
