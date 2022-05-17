import "./App.css";
import "./lib/style.css";
import BurgerButton from "./lib/components/BurgerButton";
import { useState } from "react";
import { logDOM } from "@testing-library/react";

function App() {
  const [variant, setVariant] = useState("cross-right");
  const [thin, setThin] = useState(false);
  const [thick, setThick] = useState(false);
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState(80);

  const handleVariantChange = (event) => {
    setVariant(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };
  return (
    <div className="App">
      <header className="header">
        <h1>React Burger Button</h1>
      </header>

      <section className="component">
        <div className="component__container">
          <form action="" className="component__form">
            <label className="label" htmlFor="checkbox-thin">
              thin:
              <input
                type="checkbox"
                id="checkbox-thin"
                onClick={() => setThin(!thin)}
              />
            </label>
            <label className="label" htmlFor="checkbox-thick">
              thick:{" "}
              <input
                type="checkbox"
                id="checkbox-thick"
                onClick={() => setThick(!thick)}
              />
            </label>
            <label className="label" htmlFor="variant">
              variant:
              <select
                value={variant}
                id="variant"
                onChange={handleVariantChange}
              >
                <option value="cross-right">cross-right</option>
                <option value="arrow-top-left">arrow-top-left</option>
                <option value="close">close</option>
                <option value="plus">plus</option>
                <option value="arrow-right">arrow-right</option>
                <option value="cross-complex">cross-complex</option>
                <option value="cross-left">cross-left</option>
                <option value="cross-rotate">cross-rotate</option>
              </select>
            </label>

            <label className="label" htmlFor="head">
              Color:{" "}
              <input
                type="color"
                id="color"
                name="color"
                value={color}
                onChange={handleColorChange}
              />
            </label>

            <label className="label" htmlFor="size">
              Size:
              <input
                type="range"
                id="size"
                name="size"
                min="15"
                max="99"
                value={size}
                onChange={handleSizeChange}
              />
              {size}
            </label>
          </form>
          <div className="button__wrapper">
            <BurgerButton
              variant={variant}
              thin={thin}
              thick={thick}
              color={color}
              size={size}
            />
          </div>
        </div>
        <code className="code">
          {`<BurgerButton variant="${variant}" thin="${thin}" thick="${thick}" color="${color}" size="${size}"/>`}
        </code>
      </section>
    </div>
  );
}

export default App;
