function RangeSelector({ value, onChange = () => {} }) {
  return (
    <div className="flex w-full items-center gap-3 px-2 text-offblack">
      <span className="text-xl">Max</span>

      <input
        className="w-full"
        id="maxPrice"
        type="range"
        min="1"
        max="300"
        step="1"
        value={value}
        onChange={onChange}
      />

      <span className="text-xl">${value}</span>
    </div>
  );
}

export default RangeSelector;
