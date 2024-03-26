import { ButtonProp } from "../types/Button.type";

/**
 * button component
 * renders button element
 * @prop {string} children - prop to be a string
 * @prop {object} onClick - click event on the button
 */
export default function Button({ children, onClick }: ButtonProp) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
