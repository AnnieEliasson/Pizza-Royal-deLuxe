const handleclick = (e: any) => {
  const about = document.querySelector(".about-container") as HTMLElement;
  if (e.target.innerHTML === "Om Pizza") {
    about.style.display = "flex";
  } else {
    about.style.display = "none";
  }
};

const Header = () => {
  return (
    <header>
      <h1>Pizza Royal, deLuxe</h1>
      <ul>
        <li onClick={handleclick}>Om Pizza</li>
        <li onClick={handleclick}>Beställ Pizza</li>
      </ul>
    </header>
  );
};

export default Header;
