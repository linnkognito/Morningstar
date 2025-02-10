import { useSelector } from "react-redux";
import { AdvancedImage, responsive } from "@cloudinary/react";

import Container from "../common/Container";
import { optimizeImage } from "../../utils/cloudinary";
import SizeSelector from "../ui/inputs/SizeSelector";
import ColorSelector from "../ui/inputs/ColorSelector";
import QuantitySelector from "../ui/inputs/QuantitySelector";

function ProductPage() {
  const product = useSelector((state) => {
    return state.products.currentProduct;
  });
  const publicId = product.image.split("/").at(-1).split(".")[0];
  const productImage = optimizeImage(publicId);

  return (
    <div className="flex h-full w-full justify-center bg-gradient-to-l from-aura/50 via-mint/40 to-zest/30 px-3 py-6">
      <Container className="sm:grid-cols-2s grid grid-cols-1 gap-4 px-4 py-4">
        <AdvancedImage
          cldImg={productImage}
          plugins={[responsive({ steps: 200 })]}
          className="rounded-xl shadow-sm shadow-offblack"
        />

        {/* Title, Price & Selectiors */}
        <div className="flex flex-col items-start gap-1 pl-2 pt-2">
          <h2 className="text-3xl text-offblack">{product.name}</h2>
          <h3 className="pb-2 text-2xl text-offblack">${product.price}</h3>
        </div>

        <Container className="w-full px-4 py-4">
          <SizeSelector />
          <ColorSelector colors={product.colors} />
          <QuantitySelector className="rounded-xl bg-aura/30 text-offblack" />
        </Container>

        {/* Go back button clears currentProduct state */}
      </Container>
    </div>
  );
}

export default ProductPage;
