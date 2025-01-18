export function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    // timeoutId = setTimeout(() => fn.apply(this, args), delay);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
