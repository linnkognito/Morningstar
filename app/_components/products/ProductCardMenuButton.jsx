function ProductCardMenuButton({ isOpen, onClick }) {
  return (
    <button
      className='flex h-full w-[50px] min-w-[50px] items-center justify-center font-bebas text-6xl hover:scale-110 hover:bg-pearl/50 transition-transform duration-300 ease-out will-change-[transform,color]'
      onClick={onClick}
    >
      <span>{isOpen ? '-' : '+'}</span>
    </button>
  );
}

export default ProductCardMenuButton;
