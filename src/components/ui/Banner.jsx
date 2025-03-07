function Banner({ heading }) {
  return (
    <div className="mt-4 flex h-[7vh] min-h-fit w-full items-center rounded-lg bg-gradient-to-r from-aura via-mint to-zest py-2 text-right text-pearl shadow-sm shadow-offblack/40">
      <h2
        className="ml-auto w-full pr-10 font-bebas text-6xl uppercase tracking-widest sm:pl-16"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
      >
        {heading}
      </h2>
    </div>
  );
}

export default Banner;
