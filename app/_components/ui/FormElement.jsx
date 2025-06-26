import Input from './inputs/Input';

function FormElement({
  children,
  label,
  input = { type: 'text', placeholder: '' },
}) {
  return (
    <div className='flex flex-col gap-1 w-full'>
      <label className='w-full font-semibold'>{label}</label>
      <Input input={input} />
      {children}
    </div>
  );
}

export default FormElement;
