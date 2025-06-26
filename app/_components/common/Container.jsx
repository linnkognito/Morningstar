function Container({
  children,
  tag: Tag = 'div',
  className = '',
  width = 'w-fit',
  height = 'h-fit',
  color = 'bg-pearl/50',
  border = '',
}) {
  return (
    <Tag
      className={`${className} ${width} ${height} ${color} ${border} text-md flex flex-col gap-3 rounded-xl text-center font-bebas text-lg font-medium tracking-widest text-pearl shadow-sm shadow-offblack backdrop-blur-sm transition-all duration-200`}
    >
      {children}
    </Tag>
  );
}

export default Container;
