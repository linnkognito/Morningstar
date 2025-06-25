function Form({ children, options = {} }) {
  return (
    <div>
      <form
        action={options.action || "submit"}
        className={options.className || 'max-w-1/2 gap-4" flex flex-col'}
      >
        {children}
      </form>
    </div>
  );
}

export default Form;
