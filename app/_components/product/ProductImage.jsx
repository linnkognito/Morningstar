import Image from 'next/image';

function ProductImage({ image, name }) {
  return (
    <div className='relative aspect-4/5 w-full overflow-hidden rounded-xl shadow-sm shadow-offblack'>
      <Image
        src={image}
        alt={`Product: ${name}`}
        fill
        className='object-cover object-center'
      />
    </div>
  );
}

export default ProductImage;
