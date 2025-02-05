import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchAllProducts,
  fetchProductsByCategory,
  getProducts,
} from "./productSlice";

import RefineMenu from "./menus/RefineMenu";
import ProductCard from "./ProductCard";

function Products() {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  useEffect(() => {
    if (categoryName) {
      dispatch(fetchProductsByCategory(categoryName));
    } else {
      dispatch(fetchAllProducts());
    }
  }, [categoryName, dispatch]);

  return (
    <div className="flex w-full flex-col gap-3">
      {/* Image */}
      <div className="mx-auto mt-2 flex h-[7vh] min-h-fit w-full max-w-[1320px] items-center justify-center rounded-lg bg-gradient-to-r from-aura via-mint to-zest py-2 text-pearl">
        <h2
          className="text-shad w-full pl-16 font-bebas text-6xl uppercase tracking-widest"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          {categoryName}
        </h2>
      </div>

      <div className="mx-auto flex w-full min-w-fit max-w-[1284px] flex-col space-y-3 px-2">
        {/* Filter & Sort menu */}
        <RefineMenu />

        {/* Product cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

// export async function loader({ params }) {
//   const productCategory = await fetchProductsByCategory(params.categoryName);

//   return productCategory;
// }

export default Products;
