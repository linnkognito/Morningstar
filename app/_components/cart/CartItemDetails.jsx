import Link from 'next/link';

function CartItemDetails({ item }) {
  if (!item) return null;

  return (
    <div className='pl-2 text-left font-bebas'>
      <Link href={`/product/${item.id}`} className='w-fit'>
        <h2 className='w-fit cursor-pointer text-2xl transition-all duration-200 ease-out hover:bg-zest/70 lg:text-3xl'>
          {item.name}
        </h2>
      </Link>

      {/* Product Price */}
      <p className='text-md text-grey-600 sm:text-xl lg:text-2xl'>
        ${item.price}
      </p>
    </div>
  );
}

export default CartItemDetails;
