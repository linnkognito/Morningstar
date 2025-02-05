import { useNavigate } from "react-router";

import imageHer from "../../images/HER_escape.jpg";
import imageHim from "../../images/HIM_buckethat.jpg";
import imageUnisex from "../../images/UNI_monochrome.jpg";
import imageNew from "../../images/HER_bikini.jpg";

import CategoryCard from "./CategoryCard";

function Categories() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto flex size-full h-full flex-col gap-1 px-1 pt-1 md:flex-row md:pt-0">
      <CategoryCard
        bgImage={imageHer}
        color="bg-ember"
        hoverColor="bg-aura/50"
        hoverClass="md:rounded-none rounded-r-xl rounded-b-none"
        title="her"
        className="rounded-t-xl md:rounded-xl md:rounded-r-none"
        onClick={() => navigate("products/category/womens")}
      />

      <CategoryCard
        bgImage={imageHim}
        color="bg-aura"
        hoverColor="bg-ember/50"
        title="him"
        onClick={() => navigate("products/category/mens")}
      />

      <CategoryCard
        bgImage={imageUnisex}
        color="bg-zest"
        hoverColor="bg-moss/50"
        title="uni"
        onClick={() => navigate("products/category/unisex")}
      />

      <CategoryCard
        bgImage={imageNew}
        color="bg-pearl"
        hoverColor="bg-zest/50"
        hoverClass="md:rounded-none rounded-r-xl rounded-l-none rounded-t-none"
        title="new"
        className="rounded-b-xl md:rounded-xl md:rounded-l-none"
        onClick={() => navigate("products/category/new")}
      />
    </section>
  );
}

export default Categories;
