
type PropList = {
  drink: any;
}

const DisplayDrink = ({drink}: PropList) => {
  return (
    <div className="your-pizza">
      <h2>Din Dricka:</h2>
      <p>
        <span>Storlek: </span> {drink.size}
      </p>

      <p>
        <span>Dricka: </span>
        {drink.name}

       {/*  {Object.keys(pizza.toppings).map((key) => {
          return (
            <span key={key} className="topping-items">
              {pizza.toppings[key] ? `${key}, ` : ""}
            </span>
          );
        })} */}
      </p>

      <p className="price">
        <b>Pris: {drink.totalPrice}kr.</b>
      </p>
    </div>
  );
};

export default DisplayDrink;
