import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";

import WrapperScreenGradient from "../ui/containers/WrapperScreenGradient";
import ProductCard from "../products/ProductCard";
import Banner from "../ui/Banner";
import TextButton from "../ui/buttons//TextButton";
import Icon from "../common/Icon";
import ActionButton from "../ui/buttons/ActionButton";
import ArrowButton from "../ui/buttons/ArrowButton";

function SavedProducts() {
  const navigate = useNavigate();
  const [productCardMenu, setProductCardMenu] = useState(null);

  const { saved: savedProducts } = useSelector((state) => state.user);
  const hasSavedProducts = savedProducts?.length > 0;

  return (
    <WrapperScreenGradient className="flex justify-center pb-[75px] sm:pb-4">
      <div className="flex w-full max-w-[1284px] flex-col gap-3 px-2">
        {/* Banner */}
        <Banner heading="Wishlist" />

        {/* Content */}
        <div className="mx-auto flex w-full min-w-fit max-w-[1284px] flex-col space-y-3 rounded-md bg-pearl/60 p-6 shadow-sm shadow-offblack backdrop-blur-md">
          {/* Nav */}
          {hasSavedProducts && (
            <nav className="flex justify-between border-b border-aura/30 pb-2">
              <NavLink to={() => navigate(-1)}>
                <ActionButton
                  width="w-fit"
                  fontSize="text-xl"
                  className="flex pl-2 pr-4"
                  onClick={() => navigate(-1)}
                >
                  <Icon name="arrow_back" />
                  Back
                </ActionButton>
              </NavLink>

              <NavLink to="/cart">
                <ActionButton
                  width="w-fit"
                  fontSize="text-xl"
                  className="flex pl-4 pr-2"
                  onClick={() => navigate(-1)}
                >
                  Cart
                  <Icon name="arrow_forward" />
                </ActionButton>
              </NavLink>
            </nav>
          )}

          {/* Product cards */}
          {hasSavedProducts && (
            <div className="grid grid-cols-2 gap-3 px-2 pt-2 sm:grid-cols-3 lg:grid-cols-4">
              {savedProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  currentMenu={productCardMenu}
                  setProductCardMenu={setProductCardMenu}
                  product={product}
                />
              ))}
            </div>
          )}

          {!hasSavedProducts && (
            <div className="mx-auto w-1/2 space-y-4 rounded-xl p-4 text-center">
              <h2 className="text-2xl text-offblack">Your wishlist is empty</h2>
              <NavLink to="/products">
                <ActionButton>
                  <Icon name="arrow_back" /> <span>Continue shopping</span>
                </ActionButton>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </WrapperScreenGradient>
  );
}

export default SavedProducts;
