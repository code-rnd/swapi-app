// разобью строку разделителем в массив
// верну последний элемент масива
export const getElArr = (string, symbol, spliceCount = -1) => {
  if (!string) {
    return null;
  }

  return string.split(symbol).splice(spliceCount, 1);
};
