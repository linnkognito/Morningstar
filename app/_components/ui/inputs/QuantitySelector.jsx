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
          width='w-6'
          height='h-6'
          className='bg-pearl cursor-pointer'
          onClick={decrease}
        >
          -
        </ButtonTiny>
        <span>{quantity}</span>
        <ButtonTiny
          width='w-6'
          height='h-6'
          className='bg-pearl cursor-pointer'
          onClick={increase}
        >
          +
        </ButtonTiny>
      </div>
    </div>
  );
}

export default QuantitySelector;
