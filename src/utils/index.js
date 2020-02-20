// разобью строку разделителем в массив
// верну последний элемент масива
export const getElArrUtil = (string, symbol, spliceCount = -1) => {
  if (!string) {
    return null;
  }

  return string.split(symbol).splice(spliceCount, 1);
};

export const getNewArrayObjectsUtil = (array, obj) => {
  let newArray = [...array, obj];

  return newArray;
};

export const getUrlUtil = object => {
  if (!object) {
    return {};
  }

  let url = Object.keys(object).map(item => object[item])[1][0].url;

  if (url) {
    return url;
  }

  url = Object.keys(object).map(item => object[item])[1][0].image;

  return url;
};
