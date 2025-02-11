import { sortHighestPriceFirst, sortLowestPriceFirst } from "../productSlice";
import { useDispatch } from "react-redux";

import RefineDropdown from "./RefineDropdown";
import NavItem from "../../ui/header/NavItem";

function SortDropdown({ setIsOpen }) {
  const dispatch = useDispatch();

  function handleSort(selection) {
    selection === "low"
      ? dispatch(sortLowestPriceFirst())
      : dispatch(sortHighestPriceFirst());

    setIsOpen(null);
  }

  return (
    <RefineDropdown padding="py-2">
      <ul>
        <NavItem
          key="lowestPrice"
          onClick={() => handleSort("low")}
          className="will-change group flex w-full items-center text-2xl tracking-wider text-offblack transition-all duration-300 ease-out hover:bg-zest/65 hover:pl-6 group-hover:inline sm:text-2xl"
        >
          <span>Price: Lowest first</span>
        </NavItem>
        <NavItem
          key="highestPrice"
          onClick={() => handleSort("high")}
          className="will-change group flex w-full items-center text-2xl tracking-wider text-offblack transition-all duration-300 ease-out hover:bg-zest/65 hover:pl-6 group-hover:inline sm:text-2xl"
        >
          <span>Price: Highest first</span>
        </NavItem>
      </ul>
    </RefineDropdown>
  );
}

export default SortDropdown;
