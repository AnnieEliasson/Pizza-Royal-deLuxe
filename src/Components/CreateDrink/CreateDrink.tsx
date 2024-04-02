import uuid from "react-uuid";
import { useState } from "react";
import DisplayPizza from "./DisplayDrink/DisplayDrink";
import Button from "./Button";
import DrinkForm from "./DrinkForm/DrinkForm";


type Drink = {
  id: string;
  size: string;
  name: string;
  totalPrice: number;
}
const CreateDrink = () => {

  
  const [drink, setDrink] = useState<Drink>({
    id: uuid(),
    size: "",
    name: "",
    totalPrice: 0,
  });

  /* calcPrice(pizza); */

  const handleClick = () => {
    const createPizza = document.querySelector(".Create-Pizza") as HTMLElement
    const createDrink = document.querySelector(".Create-Drink") as HTMLElement
    createPizza.classList.toggle("active")
    createDrink.classList.toggle("active")
  }

  return (
    <div className="Create-Drink">
      <h1>Välj dricka</h1>

      <ul className="flikar">
        <li onClick={handleClick}>Pizza</li>
        <li >Dricka</li>
      </ul>

      <DrinkForm drink={drink} setDrink={setDrink} />
 

      <DisplayPizza drink={drink} />

      <Button drink={drink} setDrink={setDrink} />
    </div>
  );
};

export default CreateDrink;
