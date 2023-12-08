import "./Button.css";

export default function Button(props) {
  const handleButtonClick = () => {
    props.onClick && props.onClick();
  };

  const className = [
    "button",
    props.context ? props.context : "neutral",
    props.icon ? "icon" : "",
    props.size ? props.size : "medium",
    props.variant ? props.variant : "ghost",
  ].join(" ");

  return (
    <button className={className} onClick={handleButtonClick}>
      {props.children}
    </button>
  );
}
