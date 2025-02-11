import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { fetchProductById } from "./productSlice";

import Container from "../common/Container";
import SizeSelector from "../ui/inputs/SizeSelector";
import ColorSelector from "../ui/inputs/ColorSelector";
import QuantitySelector from "../ui/inputs/QuantitySelector";
import Spinner from "../common/Spinner";

function ProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const { currentProduct: product, status } = useSelector(
    (state) => state.products,
  );

  if (status === "loading") return <Spinner />;

  return (
    <div className="flex h-full w-full justify-center bg-gradient-to-l from-aura/50 via-mint/40 to-zest/30 px-3 py-6">
      <Container className="sm:grid-cols-2s grid grid-cols-1 gap-3 px-4 py-4">
        {/* Go back button clears currentProduct state */}

        {product && (
          <>
            <img
              src={product.image}
              alt={`Product: ${product.name}`}
              className="rounded-xl shadow-sm shadow-offblack"
            />

            {/* Title, Price & Selectiors */}
            <div className="flex flex-col items-start gap-1 pl-2 pt-2">
              <h2 className="text-3xl text-offblack">{product.name}</h2>
              <h3 className="text-2xl text-offblack">${product.price}</h3>
            </div>
            <Container className="w-full px-4 py-4">
              <SizeSelector sizes={product.sizes} multiSelect={true} />
              <ColorSelector colors={product.colors} />
              <QuantitySelector
                text="quantity:"
                className="rounded-xl bg-aura/50 py-1 text-offblack"
                // increase={() => dispatch(incQuantity(product))}
                // decrease={() => dispatch(decQuantity(product))}
              />
            </Container>
          </>
        )}
      </Container>
    </div>
  );
}

export default ProductPage;
