// разобью строку разделителем в массив
// верну последний элемент масива
export const getLastElArr = (string, symbol) => {
  if (!string) {
    return null;
  }

  return string.split(symbol).pop();
};
