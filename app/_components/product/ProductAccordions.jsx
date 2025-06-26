import Accordion from '../common/Accordion';

function ProductAccordions({ product }) {
  if (!product) return null;

  return (
    <div className='mt-4 w-full'>
      <Accordion title='Product details'>
        <ul className='list-disc'>
          {product.productDetails?.map((detail, i) => (
            <li key={`${detail}-${i}`}>{detail}</li>
          ))}
        </ul>
      </Accordion>

      <Accordion title='Care instructions'>
        <ul className='list-disc'>
          {product.careInstructions?.map((care, i) => (
            <li key={`${care}-${i}`}>{care}</li>
          ))}
        </ul>
      </Accordion>
    </div>
  );
}

export default ProductAccordions;
