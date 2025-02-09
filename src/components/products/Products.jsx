import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllProducts, fetchProductsByCategory } from "./productSlice";

import RefineMenu from "./menus/RefineMenu";
import ProductCard from "./ProductCard";
import Spinner from "../common/Spinner";

function Products() {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const { status, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (categoryName) {
      dispatch(fetchProductsByCategory(categoryName));
    } else {
      dispatch(fetchAllProducts());
    }
  }, [categoryName, dispatch]);

  return (
    <div className="flex w-full justify-center pb-[75px] sm:pb-4">
      <div className="flex w-full max-w-[1284px] flex-col gap-3 px-2">
        {/* Banner */}
        <div className="mt-4 h-[7vh] min-h-fit w-full rounded-lg bg-gradient-to-r from-aura via-mint to-zest py-2 text-pearl shadow-sm shadow-offblack/40">
          <h2
            className="w-full pl-8 font-bebas text-6xl uppercase tracking-widest sm:pl-16"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            {categoryName}
          </h2>
        </div>

        {/* Content */}
        <div className="mx-auto flex w-full min-w-fit max-w-[1284px] flex-col space-y-3">
          {/* Filter & Sort menu */}
          <RefineMenu />

          {/* Product cards */}
          <div className="grid grid-cols-2 gap-4 px-2 pt-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {/* Spinner */}
            {status === "loading" && <Spinner />}

            {status === "idle" &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
