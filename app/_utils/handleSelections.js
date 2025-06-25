export function handleSelection(current, selection, isMultiSelect) {
  if (!current.length) return [selection];

  if (!isMultiSelect) return current.includes(selection) ? [] : [selection];

  if (isMultiSelect) {
    return current.includes(selection)
      ? current.filter((currentSelection) => currentSelection !== selection)
      : [...current, selection];
  }
}
