function ContainerSimple({
  children,
  className = "px-20 pb-10 pt-6",
  width = "max-w-[1024px]",
  layout = "flex flex-col items-center",
  bg = "bg-pearl/60",
}) {
  return (
    <div
      className={`${className} ${layout} ${width} ${bg} mx-auto mt-4 w-fit gap-6 rounded-md shadow-sm shadow-offblack backdrop-blur-md`}
    >
      {children}
    </div>
  );
}

export default ContainerSimple;
