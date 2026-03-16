import React, { useEffect, useState } from "react";
import { vectors } from "./utils/vectors";

function BurgerButton({ variant, thin, thick, color, size, label, onClick }) {
  const [internalOpened, setInternalOpened] = useState(false);
  // Позволяет управлять состоянием извне
  const isControlled = typeof arguments[0]?.isOpened === 'boolean';
  const isOpened = isControlled ? arguments[0].isOpened : internalOpened;
  const [buttonClassNames, setButtonClassNames] = useState("");
  const [svgClassNames, setSvgClassNames] = useState("");

  let buttonClasses;
  let svgClasses;

  const handleClick = () => {
    if (!isControlled) setInternalOpened(!internalOpened);
    onClick && onClick();
  };

  const type = () => {
    return [
      "cross-right",
      "arrow-top-left",
      "close",
      "plus",
      "arrow-right",
      "cross-complex",
      "cross-left",
      "cross-rotate",
    ].indexOf(variant) !== -1
      ? "burger"
      : "mod";
  };

  buttonClasses = {
    [type()]: true,
    [variant]: true,
  };

  svgClasses = {
    burger__menu: true,
    "burger__menu--thin": thin,
    "burger__menu--thick": thick,
    hamRotate:
      ["cross-right", "arrow-top-left", "cross-left", "cross-rotate"].indexOf(
        variant
      ) !== -1,
    [variant]: variant,
    opened: isOpened,
  };

  const getClasses = (classes) => {
    let result = [];
    Object.keys(classes).forEach((item) => {
      if (!!classes[item]) result.push(item);
    });
    return result.join(" ");
  };

  const vector = () => {
    return vectors[variant];
  };

  useEffect(() => {
    setButtonClassNames(getClasses(buttonClasses));
    setSvgClassNames(getClasses(svgClasses));
  }, [isOpened, variant, thin, thick]);

  return (
    <button className={buttonClassNames} type="button" aria-label={label}>
      <svg
        className={svgClassNames}
        viewBox="0 0 100 100"
        width={size}
        onClick={handleClick}
      >
        {vector().map((item, index) => (
          <path key={index} className={item.class} d={item.d} stroke={color} />
        ))}
      </svg>
    </button>
  );
}

BurgerButton.defaultProps = {
  variant: "cross-right",
  thin: false,
  thick: false,
  color: "#000000",
  size: 80,
  label: "burger button",
  isOpened: undefined,
};

export default BurgerButton;
