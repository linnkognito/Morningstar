function ProductCardMenuButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      className='flex h-full w-[50px] min-w-[50px] items-center justify-center font-bebas text-6xl hover:scale-110 hover:bg-white/70 transition-transform duration-300 ease-out will-change-[transform,color] cursor-pointer'
      onClick={onClick}
    >
      <span>{isOpen ? '-' : '+'}</span>
    </button>
  );
}

export default ProductCardMenuButton;
