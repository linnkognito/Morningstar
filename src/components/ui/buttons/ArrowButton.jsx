import Icon from "../../common/Icon";

function ArrowButton({
  dir = "right",
  size = "text-9xl",
  className = "",
  onClick = () => {},
}) {
  return (
    <Icon
      name={dir === "right" ? "arrow_forward" : "arrow_back"}
      al={`${dir} arrow`}
      className={`${className} ${size}`}
      onClick={onClick}
    />
  );
}

export default ArrowButton;
