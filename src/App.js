import "./App.css";
import BurgerButton from "./lib/components/BurgerButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BurgerButton variant="plus" />
      </header>
    </div>
  );
}

export default App;
