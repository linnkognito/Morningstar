import { useSelector } from "react-redux";
import { AdvancedImage, responsive } from "@cloudinary/react";

import Container from "../common/Container";
import { optimizeImage } from "../../utils/cloudinary";

function ProductPage() {
  const product = useSelector((state) => {
    return state.products.currentProduct;
  });
  const publicId = product.image.split("/").at(-1).split(".")[0];
  const productImage = optimizeImage(publicId);

  return (
    <div className="flex h-screen w-screen justify-center bg-gradient-to-l from-aura/50 via-mint/40 to-zest/30 pt-6">
      <Container className="grid grid-cols-2 px-8 py-4">
        <AdvancedImage
          cldImg={productImage}
          plugins={[responsive({ steps: 200 })]}
        />

        <h2 className="text-offblack">Title</h2>

        {/* Go back button clears currentProduct state */}
      </Container>
    </div>
  );
}

export default ProductPage;
