import SizeRadioButton from "./SizeRadioButton";
import DrinkItem from "./DrinkItem";

export const drinkItems = [
  "coca-cola",
  "fanta",
  "sprite",
  "ramlösa",

];
const sizeButtons = ["33cl", "50cl", "1,5l"];

type PropList = {
  drink: any;
  setDrink: any;
}

const DrinkForm = ({drink, setDrink}: PropList) => {
  return (
    <div className="inputs">
      <fieldset id="drink-size">
        <legend>Välj Storlek</legend>

        {sizeButtons.map((i) => {
          return (
            <SizeRadioButton
              drink={drink}
              setDrink={setDrink}
              key={i}
              label={i}
            />
          );
        })}
      </fieldset>

      <fieldset id="drink-name">
        <legend>Drickor</legend>
        <ul>
          {drinkItems.map((i) => {
            return (
              <DrinkItem drink={drink} setDrink={setDrink} key={i} name={i} />
            );
          })}
        </ul>
      </fieldset>
    </div>
  );
};

export default DrinkForm;
