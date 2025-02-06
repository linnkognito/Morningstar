function PromotionBar({ code = "" }) {
  return (
    <div className="flex w-full items-center justify-center bg-mint">
      <p className="font-bebas uppercase tracking-widest">
        Get 20% off with code <span className="font-semibold">{code}</span>
      </p>
    </div>
  );
}

export default PromotionBar;
