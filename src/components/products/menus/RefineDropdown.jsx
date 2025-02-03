function RefineDropdown({ children, className = "" }) {
  return (
    <div
      className={`${className} text-md flex h-full w-full cursor-pointer flex-col gap-3 rounded border-2 border-zest bg-pearl/70 px-2 py-3 text-center font-bebas text-lg font-medium tracking-widest text-pearl backdrop-blur-sm transition-all duration-200`}
    >
      {children}
    </div>
  );
}

export default RefineDropdown;
