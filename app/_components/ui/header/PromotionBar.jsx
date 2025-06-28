function PromotionBar() {
  const promoCode = process.env.NEXT_PUBLIC_PROMOTION_CODE;

  return (
    <div className='flex items-center justify-center h-[25px] w-full py-4 bg-gradient-to-r from-mint via-mint to-zest/50 text-offblack'>
      <p className='font-bebas text-lg uppercase tracking-widest'>
        Get 20% off with code <span className='font-semibold'>{promoCode}</span>
      </p>
    </div>
  );
}

export default PromotionBar;
