import { useState } from "react";
import ArrowButton from "../ui/buttons/ArrowButton";

function CategoryCard({
  color = "pearl",
  title = "",
  bgImage = "",
  className = "",
  hoverColor = "bg-zest/60",
  hoverClass = "",
  onClick = () => {},
}) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered((prev) => !prev);

  return (
    <div
      className={`${color} h-full w-full bg-cover bg-center shadow-sm shadow-offwhite/20 md:my-2 md:w-1/4 ${className}`}
      style={{ backgroundImage: `url(${bgImage})` }}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={onClick}
    >
      <div className="relative flex h-full min-w-full cursor-pointer items-end justify-start">
        {hovered && (
          <div className="absolute end-0 flex h-full w-fit cursor-pointer items-center md:w-full md:justify-center">
            <div
              className={`${hoverColor} ${hoverClass} flex h-full min-h-[15vh] w-full items-center justify-center py-6 md:h-fit`}
            >
              <ArrowButton />
            </div>
          </div>
        )}

        <h2
          className="text-shadow-sm ml-2 h-fit p-0 font-bebas text-[10vw] uppercase leading-none text-pearl"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

export default CategoryCard;
