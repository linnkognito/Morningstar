import Button from '../../ui/buttons/Button';

function RefineMenuButton({
  children,
  isOpen,
  disabled = false,
  onClick = () => {},
}) {
  return (
    <Button
      type='filter'
      className={`hover:bg-zest cursor-pointer ${
        isOpen ? 'border-transparent bg-zest text-offblack' : 'bg-aura/30'
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default RefineMenuButton;
