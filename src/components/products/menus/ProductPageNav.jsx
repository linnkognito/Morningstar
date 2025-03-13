import { useNavigate } from "react-router";
import ArrowButton from "../../ui/buttons/ArrowButton";

function ProductPageNav() {
  const navigate = useNavigate();

  return (
    <div
      className="group flex w-fit cursor-pointer items-center xl:hidden"
      onClick={() => navigate(-1)}
    >
      <ArrowButton
        dir="left"
        size="text-md"
        className="cursor-pointer text-offblack"
      />
      <span className="will-change pl-1 text-offblack opacity-0 duration-300 ease-in-out group-hover:opacity-100">
        Back
      </span>
    </div>
  );
}

export default ProductPageNav;
