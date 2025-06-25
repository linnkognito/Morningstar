function WrapperScreenGradient({ children, className = '' }) {
  return (
    <div
      className={`${className} mx-auto h-full w-full origin-center bg-gradient-to-r from-aura/60 via-mint/40 to-zest/30 bg-cover bg-center p-4 backdrop-blur-xl border border-offblack`}
    >
      {children}
    </div>
  );
}

export default WrapperScreenGradient;
