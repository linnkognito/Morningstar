// import imageHer from "../../images/HER_sunglasses.jpg";
// import imageHim from "../../images/HIM_blazer_rose.jpg";
// import imageUnisex from "../../images/UNI_turtleneck.jpg";
// import imageNew from "../../images/HIM_outfit_1.jpg";
import imageHer from "../../images/HER_escape.jpg";
import imageHim from "../../images/HIM_buckethat.jpg";
import imageUnisex from "../../images/UNI_monochrome.jpg";
import imageNew from "../../images/HER_bikini.jpg";

import CategoryCard from "./CategoryCard";
import { useNavigate } from "react-router";

function Categories() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto flex size-full h-full flex-col gap-1 px-1 pb-4 md:flex-row">
      <CategoryCard
        bgImage={imageHer}
        color="bg-ember"
        hoverColor="bg-aura/50"
        hoverClass="md:rounded-none rounded-r-xl rounded-b-none"
        title="her"
        className="rounded-t-xl md:rounded-xl md:rounded-r-none"
        onClick={() => navigate("/her")}
      />

      <CategoryCard
        bgImage={imageHim}
        color="bg-aura"
        hoverColor="bg-ember/50"
        title="him"
        className=""
        onClick={() => navigate("/him")}
      />

      <CategoryCard
        bgImage={imageUnisex}
        color="bg-zest"
        hoverColor="bg-moss/50"
        title="uni"
        className=""
        onClick={() => navigate("/unisex")}
      />

      <CategoryCard
        bgImage={imageNew}
        color="bg-pearl"
        hoverColor="bg-zest/50"
        hoverClass="md:rounded-none rounded-r-xl rounded-l-none rounded-t-none"
        title="new"
        className="rounded-b-xl md:rounded-xl md:rounded-l-none"
        onClick={() => navigate("/new")}
      />
    </section>
  );
}

export default Categories;
