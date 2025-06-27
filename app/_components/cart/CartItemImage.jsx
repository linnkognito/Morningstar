import Image from 'next/image';

function CartItemImage({ item }) {
  console.log(item.image);
  return (
    <div className='relative aspect-4/5 w-full max-w-[30%] lg:max-w-[25%]'>
      <Image
        src={item.image}
        alt={item.name}
        fill
        className='rounded-l object-center object-cover'
      />
    </div>
  );
}

export default CartItemImage;
