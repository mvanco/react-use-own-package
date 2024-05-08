import { CSSProperties } from "react";

function Button({ text, onClick, style }: { text: string, onClick: () => void, style?: CSSProperties}) {
  return (
      <button className="button" onClick={onClick} style={style}>{text}</button>
  );
}

// const Button = ({ text, onClick }: { text: string, onClick: () => void }) => (
//   <button onClick={onClick}>{text}</button>
// );

export default Button;