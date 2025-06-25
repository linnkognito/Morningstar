import { SpinnerDotted } from 'spinners-react';

function Spinner({ text }) {
  return (
    <div className='col-span-2 mx-auto flex w-full flex-col place-items-center pt-8 sm:col-span-3 md:col-span-4 lg:col-span-5'>
      <SpinnerDotted color='#D19BF3' size='100px' thickness={100} speed={100} />
      <p className='pt-4 text-grey-700'>{text || 'Getting products...'}</p>
    </div>
  );
}

export default Spinner;
