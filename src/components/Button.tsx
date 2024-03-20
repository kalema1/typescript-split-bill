type ButtonProp = {
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

/**
 * button component
 * renders button element
 * @param {string} children - prop to be a string
 * @param {obj} onClick - click event on the button
 */
export default function Button({ children, onClick }: ButtonProp) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
