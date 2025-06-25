export default function Icon({
  children,
  alt = '',
  'aria-label': ariaLabel,
  className = '',
  ...props
}) {
  return (
    <span
      role='img'
      aria-label={ariaLabel}
      className={`${className} text-2xl transition-transform duration-200 ease-in group-hover:scale-110`}
      {...props}
    >
      {children}
    </span>
  );
}
