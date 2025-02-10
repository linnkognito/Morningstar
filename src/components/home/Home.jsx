import { useNavigate } from "react-router";
import { optimizeImage } from "../../utils/cloudinary";

import CategoryCard from "./CategoryCard";

function Categories() {
  const navigate = useNavigate();

  const imageHer = optimizeImage("HER_escape_uwutqq");
  const imageHim = optimizeImage("HIM_buckethat_zlkjv8");
  const imageUnisex = optimizeImage("UNI_monochrome_t4wteo");
  const imageNew = optimizeImage("HER_bikini_apdjt3");

  return (
    <section className="mx-auto flex size-full h-full flex-col gap-1 px-1 pt-1 md:flex-row md:pt-0">
      <CategoryCard
        image={imageHer}
        color="bg-ember"
        hoverColor="bg-aura/50"
        hoverClass="md:rounded-none rounded-r-xl rounded-b-none"
        title="her"
        className="rounded-t-xl md:rounded-xl md:rounded-r-none"
        onClick={() => navigate("products/category/womens")}
      />

      <CategoryCard
        image={imageHim}
        color="bg-aura"
        hoverColor="bg-ember/50"
        title="him"
        className=""
        onClick={() => navigate("products/category/mens")}
      />

      <CategoryCard
        image={imageUnisex}
        color="bg-zest"
        hoverColor="bg-moss/50"
        title="uni"
        className="object-[50%_30%]"
        onClick={() => navigate("products/category/unisex")}
      />

      <CategoryCard
        image={imageNew}
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
