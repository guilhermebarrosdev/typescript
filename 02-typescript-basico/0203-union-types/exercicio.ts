function toNumber(value: number | string) {
  if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    return Number(value);
  } else {
    throw 'value deve ser um number | string';
  }
}

console.log(toNumber('300'));
// console.log(Number(false));
