function Input({ input = {} }) {
  return (
    <input
      type={input.type || "text"}
      placeholder={input.placeholder || ""}
      className="will-change w-full rounded-md py-1 pl-2 pr-8 font-primary text-lg tracking-wide text-offblack placeholder-grey-400 shadow-[0_0_2px_#0F0F0F] shadow-offblack transition-all ease-out placeholder:text-sm hover:shadow-[0_0_4px_#0F0F0F] focus:ring-0 focus:ring-pearl sm:w-[200px] md:w-64"
    />
  );
}

export default Input;
