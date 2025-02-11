export function handleSizeSelection(current, size, isMultiselect) {
  if (!current.length) return [size];

  if (!isMultiselect) return current.includes(size) ? [] : [size];

  if (isMultiselect) {
    return current.includes(size)
      ? current.filter((currentSize) => currentSize !== size)
      : [...current, size];
  }
}
