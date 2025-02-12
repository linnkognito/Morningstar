import { useState } from "react";
import Icon from "./Icon";

function Accordion({ children, title = "" }) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="text-offback mb-2 w-full rounded border border-offblack bg-pearl/70 py-1 text-left font-primary text-offblack">
      <button
        onClick={() => setExpand((prev) => !prev)}
        className="flex w-full items-center justify-between"
      >
        <h3 className="px-4 py-2 font-primary text-offblack">{title}</h3>
        <Icon
          name={expand ? "keyboard_arrow_up" : "keyboard_arrow_down"}
          className="pr-4 text-offblack"
        />
      </button>

      {expand && (
        <div className="pb-2 pl-10 text-base text-gray-600">{children}</div>
      )}
    </div>
  );
}

export default Accordion;
