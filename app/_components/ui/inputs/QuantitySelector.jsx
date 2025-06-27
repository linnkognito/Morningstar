import ButtonTiny from '../buttons/ButtonTiny';

function QuantitySelector({
  text = '',
  fontSize = null,
  className = '',
  quantity = 1,
  decrease = '',
  increase = '',
}) {
  return (
    <div
      className={`${className} flex place-content-center gap-2 font-bebas ${
        fontSize || 'text-md md:text-xl'
      }`}
    >
      <p>{text}</p>
      <div className='flex gap-2'>
        <ButtonTiny
          aria-label='Decrease quantity'
          height='h-6'
          className='pt-1 text-center bg-pearl cursor-pointer aspect-square'
          onClick={decrease}
        >
          -
        </ButtonTiny>
        <span>{quantity}</span>
        <ButtonTiny
          aria-label='Increase quantity'
          height='h-6'
          className='pt-1 text-center bg-pearl cursor-pointer aspect-square'
          onClick={increase}
        >
          +
        </ButtonTiny>
      </div>
    </div>
  );
}

export default QuantitySelector;
