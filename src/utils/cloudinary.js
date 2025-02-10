import { Cloudinary } from "@cloudinary/url-gen/index";

const cloudinary = new Cloudinary({
  cloud: { cloudName: "dsqgkyybl" },
});

export const optimizeImage = (publicId) =>
  cloudinary.image(publicId).quality(100).format("auto");
