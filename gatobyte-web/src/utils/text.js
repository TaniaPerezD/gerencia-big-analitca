export function splitNumberedTitle(title) {
  const match = title.match(/^(\d+)\.\s*(.*)$/);
  if (!match) return { num: null, label: title };
  return { num: match[1], label: match[2] };
}
