import React, { createContext, useReducer } from "react";
import calcPrice from "./Calk";

type PropList = {
  children: React.ReactNode;
};

export type Topping = {
  [key: string]: boolean;
};

export type Pizza = {
  id: string;
  size: string;
  toppings: Topping;
  totalPrice: number;
};

export type Drink = {
  id: string;
  size: string;
  name: string;
  totalPrice: number;
};

type PizzaState = {
  pizzas: Pizza[];
  drinks: Drink[];
};

const initialPizzas: PizzaState = {
  pizzas: [],
  drinks: [],
};

type Action =
  | { type: "ADD"; payload: Pizza }
  | { type: "REMOVE"; payload: string }
  | { type: "EDIT"; payload: { size: string; id: string } }
  | { type: "ADD-Drink"; payload: Drink }

const reducer = (state: PizzaState, action: Action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, pizzas: [...state.pizzas, action.payload] };

    case "REMOVE":
      return {
        ...state,
        pizzas: [...state.pizzas.filter((p) => p.id != action.payload)],
      };

    case "EDIT":
      const edited = state.pizzas.filter((p) => p.id === action.payload.id);
      edited[0].size = action.payload.size;
      let totalPrice = calcPrice(edited[0]);
      edited[0].totalPrice = totalPrice;

      return { ...state, pizzas: [...state.pizzas] };

    case "ADD-Drink":
      console.log(state.drinks);

      return {...state, drinks: [...state.drinks, action.payload]}
  }

  return state;
};

export const PizzaContext = createContext<{
  state: PizzaState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialPizzas,
  dispatch: () => null,
});

const PizzaContextProvider = ({ children }: PropList) => {
  const [state, dispatch] = useReducer(reducer, initialPizzas);

  return (
    <PizzaContext.Provider value={{ state, dispatch }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContextProvider;
