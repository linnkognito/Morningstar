import { useState } from "react";
import { useSelector } from "react-redux";

import WrapperScreenGradient from "../ui/containers/WrapperScreenGradient";
import ProductCard from "../products/ProductCard";
import Banner from "../ui/Banner";
import TextButton from "../ui/buttons//TextButton";

function SavedProducts() {
  // const navigate = useNavigate();
  const [productCardMenu, setProductCardMenu] = useState(null);

  const { name, saved: savedProducts } = useSelector((state) => state.user);

  return (
    <WrapperScreenGradient className="flex justify-center pb-[75px] sm:pb-4">
      <div className="flex w-full max-w-[1284px] flex-col gap-3 px-2">
        {/* Banner */}
        <Banner heading="Saved products" />

        {/* Content */}
        <div className="mx-auto flex w-full min-w-fit max-w-[1284px] flex-col space-y-3 rounded-md bg-pearl/60 p-6 shadow-sm shadow-offblack backdrop-blur-md">
          <div className="flex justify-between border-b border-aura/30 pb-2">
            <TextButton>&larr; Back</TextButton>
            <TextButton>Cart &rarr; </TextButton>
          </div>

          {/* Product cards */}
          <div className="grid grid-cols-2 gap-3 px-2 pt-2 sm:grid-cols-3 lg:grid-cols-4">
            {/* Spinner */}

            {savedProducts.length &&
              savedProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  currentMenu={productCardMenu}
                  setProductCardMenu={setProductCardMenu}
                  product={product}
                />
              ))}
          </div>
        </div>
      </div>
    </WrapperScreenGradient>
  );
}

export default SavedProducts;
