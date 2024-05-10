import Button from "./Button";

const LaunchButton = ({ type, onClick }: { type: string, onClick: () => void }) => {
  if (type === "stop") {
    return (
      <div className="Button-container">
        <Button text={"Stop"} style={{ background: "red", width: "256px" }} onClick={onClick} />
      </div>
    );
  } else if (type === "start") {
    return (
      <div className="Button-container">
        <Button text={"Start"} style={{ background: "#00aa00ff", width: "256px" }} onClick={onClick} />
      </div>
    );
  } else {
    return (
      <div className="Button-container">
          <Button text={"Reset"} style={{ background: "grey", width: "256px" }} onClick={onClick} />
      </div>
    );
  }
};

export default LaunchButton;