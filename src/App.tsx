import "./App.scss";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import CreatePizza from "./Components/CreatePizza/CreatePizza";
import Header from "./Components/Header/Header";
import PizzaContextProvider from "./Components/PizzaContextProvider";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <PizzaContextProvider>
          <CreatePizza />
          <Cart />
        </PizzaContextProvider>

        <About />
      </main>
    </div>
  );
}

export default App;
