import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router";
import { useSaveItem } from "../../utils/useSaveItem";

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
import ArrowButton from "../ui/buttons/ArrowButton";
import Accordion from "../common/Accordion";
import AddProductButtonSet from "./AddProductButtonSet";

function ProductPage() {
  const { id } = useParams();
  const { quantity } = useSelector((state) => state.products.selections);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) dispatch(fetchProductById(id));
    return () => dispatch(clearSelections());
  }, [dispatch, id]);

  const { currentProduct: product, status } = useSelector(
    (state) => state.products,
  );
  const { isSavedItem, toggleSave } = useSaveItem(id, product);

  if (status === "loading") return <Spinner />;

  return (
    <div className="flex h-full w-full justify-center bg-gradient-to-l from-aura/50 via-mint/40 to-zest/30 px-6 py-6">
      <Container className="relative max-w-[1000px] px-4 py-4">
        <div className="will-change absolute -left-12 hidden cursor-pointer items-center rounded-xl bg-aura/65 px-2 py-1 shadow-sm shadow-offblack duration-300 ease-out hover:-left-14 xl:flex">
          <ArrowButton
            dir="left"
            size="text-md"
            className="text-offblack"
            onClick={() => navigate(-1)}
          />
        </div>

        {/* Actionbar (top) */}
        <div
          className="group flex w-fit cursor-pointer items-center xl:hidden"
          onClick={() => navigate(-1)}
        >
          <ArrowButton
            dir="left"
            size="text-md"
            className="cursor-pointer text-offblack"
          />
          <span className="will-change pl-1 text-offblack opacity-0 duration-300 ease-in-out group-hover:opacity-100">
            Back
          </span>
        </div>

        {product && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="w-full">
              <img
                src={product.image}
                alt={`Product: ${product.name}`}
                className="rounded-xl shadow-sm shadow-offblack"
              />
            </div>
            {/* Title, Price & Selectiors */}
            <Container
              width="w-full"
              height="h-full"
              color="bg-aura/20"
              className="flex flex-col items-start justify-start gap-1 px-6 py-6"
            >
              <div className="flex flex-col items-start">
                <h2 className="text-3xl text-offblack">{product.name}</h2>
                <h3 className="text-2xl text-grey-600">${product.price}</h3>
              </div>

              {/* Selections */}
              <Container
                color="bg-pearl/90"
                width="w-full max-w-full"
                className="px-4 py-4"
              >
                <SizeSelector
                  sizes={product?.sizes}
                  multiSelect={false}
                  type="selections"
                />
                <ColorSelector colors={product?.colors} multiSelect={false} />
                <QuantitySelector
                  text="quantity:"
                  quantity={quantity}
                  className="rounded-xl bg-sea/80 py-1 text-xl text-offblack"
                  increase={() => dispatch(incQuantity(product))}
                  decrease={() => dispatch(decQuantity(product))}
                />
              </Container>

              <AddProductButtonSet
                product={product}
                onClick={toggleSave}
                isSavedItem={isSavedItem}
                className="grid"
              />

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
