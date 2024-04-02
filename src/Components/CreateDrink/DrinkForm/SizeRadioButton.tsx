
type PropList = {
  setDrink: any;
  drink: any;
  label: string;
};

const SizeRadioButton = ({ setDrink, drink, label }: PropList) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        onChange={(e) => {
          switch (e.target.id) {
            case "33cl":
              setDrink({ ...drink, size: e.target.id, totalPrice: 10 });

              break;

            case "50cl":
              setDrink({ ...drink, size: e.target.id, totalPrice: 15 });

              break;

            case "1,5l":
              setDrink({ ...drink, size: e.target.id, totalPrice: 20 });
              break;

            default:
              break;
          }
        }}
        type="radio"
        name="size"
        id={label}
      />
    </>
  );
};

export default SizeRadioButton;
