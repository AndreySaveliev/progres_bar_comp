export function numberValidation(value) {
  let str = value.toString();
  if (value.length > 2) {
    str = "100";
  }
  if (/[0-9]/.test(value)) {
    return str;
  } else {
    return;
  }
}
