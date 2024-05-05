function Button({ text, onClick }: { text: string, onClick: () => void }) {
  return (
      <button onClick={onClick}>{text}</button>
  );
}

// const Button = ({ text, onClick }: { text: string, onClick: () => void }) => (
//   <button onClick={onClick}>{text}</button>
// );

export default Button;