

type PropList = {
  drink: any;
  setDrink: any;
  name: string;
};

const DrinkItem = ({ drink, setDrink, name }: PropList) => {
  return (
    <li>
      <input
        className="topping"
        onClick={(e: any) => {
          setDrink({ ...drink, name: e.target.id})
          console.log(drink);
          

        }}
        type="radio"
        name= "drink"
        id={name}
      />
      <label htmlFor={name}>{name}</label>
    </li>
  );
};

export default DrinkItem;
