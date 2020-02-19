import axios from "axios";

export const instance = axios.create({
  baseURL: "https://swapi.co/api/"
});

export const swApi = {
  // получить один объект из выбранной категории
  getObject(categoryName, id) {
    return instance
      .get(`${categoryName}/${id}/`)
      .then(response => this._getGenerateObject(categoryName, response));
  },

  // получить группу объектов из выбранной категории
  getObjects(categoryName, url = "") {
    return instance
      .get(`${categoryName}/${url}`)
      .then(response => this._getGenerateObject(categoryName, response));
  },

  // создаю объект, для дальнейшей передачи в стейт
  _getGenerateObject(categoryName, response) {
    return { [categoryName]: response.data };
  }
};
