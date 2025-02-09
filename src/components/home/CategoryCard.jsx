import { useState } from "react";
import ArrowButton from "../ui/buttons/ArrowButton";
import { AdvancedImage, responsive } from "@cloudinary/react";

function CategoryCard({
  color = "pearl",
  title = "",
  image = "",
  className = "",
  hoverColor = "bg-zest/60",
  hoverClass = "",
  onClick = () => {},
}) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered((prev) => !prev);

  return (
    <div
      className={`${color} ${className} relative w-full grow shadow-sm shadow-offblack md:mt-2 md:w-1/4`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={onClick}
    >
      <AdvancedImage
        cldImg={image}
        plugins={[responsive({ steps: 200 })]}
        className={`${className} absolute h-full w-full object-cover object-[50%_40%]`}
      />

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
