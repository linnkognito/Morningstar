import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

import {
  clearSelections,
  decQuantity,
  fetchProductById,
  incQuantity,
} from "./productSlice";

import Container from "../common/Container";
import SizeSelector from "../ui/inputs/SizeSelector";
import ColorSelector from "../ui/inputs/ColorSelector";
import QuantitySelector from "../ui/inputs/QuantitySelector";
import Spinner from "../common/Spinner";
import AddToCartButton from "../cart/AddToCartButton";
import ActionButton from "../ui/buttons/ActionButton";
import ArrowButton from "../ui/buttons/ArrowButton";
import Accordion from "../common/Accordion";

function ProductPage() {
  const { id } = useParams();
  const { quantity } = useSelector((state) => state.products.selections);
  const { products, status } = useSelector((state) => state.products);

  const product = products.find((product) => product._id === id);
  console.log(product.sizes);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) dispatch(fetchProductById(id));
    return () => dispatch(clearSelections());
  }, [dispatch, id]);

  if (status === "loading") return <Spinner />;

  return (
    <div className="flex h-full w-full justify-center bg-gradient-to-l from-aura/50 via-mint/40 to-zest/30 px-6 py-6">
      <Container className="relative max-w-[1000px] px-4 py-4">
        <div className="will-change absolute -left-12 flex cursor-pointer items-center rounded-xl bg-aura/65 px-2 py-1 shadow-sm shadow-offblack duration-300 ease-out hover:-left-14">
          <ArrowButton
            dir="left"
            size="text-md"
            className="text-offblack"
            onClick={() => navigate(-1)}
          />
        </div>

        {/* Actionbar (top) */}
        {/* <div className="flex items-center"> */}
        {/* <ArrowButton dir="left" size="text-md" className="text-offblack" /> */}
        {/* </div> */}

        {product && (
          <div className="grid grid-cols-2 gap-3">
            <img
              src={product.image}
              alt={`Product: ${product.name}`}
              className="rounded-xl shadow-sm shadow-offblack"
            />
            {/* Title, Price & Selectiors */}
            <Container
              width="w-full"
              height="h-full"
              color="bg-aura/20"
              className="flex flex-col items-start justify-start gap-1 px-6 py-6"
            >
              <h2 className="text-3xl text-offblack">{product.name}</h2>
              <h3 className="text-2xl text-offblack">${product.price}</h3>

              {/* Selections */}
              <Container
                color="bg-pearl/90"
                width="w-full"
                className="px-4 py-4"
              >
                <SizeSelector
                  sizes={product?.sizes}
                  multiSelect={false}
                  type="productPage"
                />
                <ColorSelector
                  colors={product?.colors}
                  multiSelect={false}
                  className="px-6"
                />
                <QuantitySelector
                  text="quantity:"
                  quantity={quantity}
                  className="rounded-xl bg-sea/80 py-1 text-xl text-offblack"
                  increase={() => dispatch(incQuantity(product))}
                  decrease={() => dispatch(decQuantity(product))}
                />
              </Container>

              <div className="grid w-full grid-cols-1 gap-1">
                <AddToCartButton
                  product={product}
                  width="w-full"
                  bgColor="bg-zest/70"
                />
                <ActionButton
                  color="bg-aura/70"
                  hoverColor="hover:bg-aura"
                  width="w-full"
                  className="text-lg"
                >
                  Add to wishlist
                </ActionButton>
              </div>
              {/* Accordions */}
              <div className="mt-4 w-full">
                <Accordion title="Product details">
                  <ul className="list-disc">
                    <li>100% cotton</li>
                    <li>Length 32"</li>
                    <li>Cropped</li>
                  </ul>
                </Accordion>
                <Accordion title="Care instructions">
                  <ul className="list-disc">
                    <li>Machine wash cold</li>
                    <li>Wash with similar colors</li>
                    <li>Do not tumble dry</li>
                  </ul>
                </Accordion>
              </div>
            </Container>
          </div>
        )}
      </Container>
    </div>
  );
}

export default ProductPage;
