import Icon from "../common/Icon";

function HeartButton({
  isSaved,
  padding = "pr-2 pt-0.5",
  heartButtonHover,
  setHeartButtonHover,
  onClick,
}) {
  return (
    <Icon
      name={
        isSaved ? "heart_check" : heartButtonHover ? "heart_plus" : "favorite"
      }
      onMouseEnter={() => setHeartButtonHover(true)}
      onMouseLeave={() => setHeartButtonHover(false)}
      className={`${padding} absolute right-0 cursor-pointer ${isSaved ? "text-zest" : "text-pearl"}`}
      style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 1)" }}
      onClick={onClick}
    />
  );
}

export default HeartButton;
