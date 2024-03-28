import { Pizza } from "../../PizzaContextProvider";

type PropList = {
  pizza: Pizza;
  SetPizza: any;
  label: string;
};

const SizeRadioButton = ({ pizza, SetPizza, label }: PropList) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        onChange={(e) => {
          SetPizza({ ...pizza, size: e.target.id });
        }}
        type="radio"
        name="size"
        id={label}
      />
    </>
  );
};

export default SizeRadioButton;
