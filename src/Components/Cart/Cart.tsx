import { useContext } from "react";
import { PizzaContext } from "../PizzaContextProvider";

const Cart = () => {
  const { state, dispatch } = useContext(PizzaContext);

  let totalAmount = 0;
  const endPrice = () => {
    state.pizzas.forEach((p) => {
      totalAmount = totalAmount + p.totalPrice;
    });
  };
  endPrice();

  return (
    <div className="Cart">
      <h1>Din beställning:</h1>
      <ul>
        {state.pizzas.map((p) => {
          return (
            <li key={p.id}>
              <select
                value={p.size}
                name="size"
                id="size"
                onChange={(e) => {
                  dispatch({
                    type: "EDIT",
                    payload: { size: e.target.value, id: p.id },
                  });
                }}
              >
                <option className="option" value="Small">
                  Small
                </option>
                <option className="option" value="Medium">
                  Medium
                </option>
                <option className="option" value="Large">
                  Large
                </option>
              </select>
              <button
                onClick={(e) => {
                  dispatch({
                    type: "REMOVE",
                    payload: (e.target as HTMLInputElement).value,
                  });
                }}
                value={p.id}
                className="delete-btn"
              >
                ta bort
              </button>
              <p>
                {Object.keys(p.toppings).map((key) => {
                  return (
                    <span key={key} className="topping-items">
                      {p.toppings[key] ? `${key}, ` : ""}
                    </span>
                  );
                })}
              </p>

              <p>Pris: {p.totalPrice}kr.</p>
            </li>
          );
        })}
        <b>
          <p>Total Summa: {totalAmount}kr.</p>
        </b>
      </ul>
    </div>
  );
};

export default Cart;
