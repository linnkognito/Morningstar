import toast from "react-hot-toast";
import Icon from "../common/Icon";

function HeartButton({
  padding = "pr-2 pt-0.5",
  savedProduct, // placeholder
  setSavedProduct, // placeholder
  heartButtonHover,
  setHeartButtonHover,
}) {
  function toggleSave() {
    !savedProduct
      ? toast.success("Added to wishlist")
      : toast.error("Removed from wishlist");

    setSavedProduct((saved) => !saved);
  }

  return (
    <Icon
      name={
        savedProduct
          ? "heart_check"
          : heartButtonHover
            ? "heart_plus"
            : "favorite"
      }
      onMouseEnter={() => setHeartButtonHover(true)}
      onMouseLeave={() => setHeartButtonHover(false)}
      className={`${padding} absolute right-0 cursor-pointer ${savedProduct ? "text-zest" : "text-pearl"}`}
      style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 1)" }}
      onClick={toggleSave}
    />
  );
}

export default HeartButton;
