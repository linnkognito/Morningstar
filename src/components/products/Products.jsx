import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import RefineMenu from "./menus/RefineMenu";
import ProductCard from "./ProductCard";
import {
  fetchAllProducts,
  fetchProductsByCategory,
  getProducts,
} from "./productSlice";

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
      <div className="h-[15vh] w-full bg-aura sm:h-[25vh]"></div>

      <div className="mx-auto flex w-full min-w-fit max-w-[1284px] flex-col space-y-3 border px-2">
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
