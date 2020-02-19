import axios from "axios";

export const instance = axios.create({
  baseURL: "https://swapi.co/api/"
});

export const swApi = {
  // получить один объект из выбранной категории
  getObject(categoryName, id) {
    return instance
      .get(`${categoryName}/${id}/`)
      .then(response => response.data);
  },

  // получить группу объектов из выбранной категории
  getObjects(url) {
    return instance.get(`${url}`).then(response => response.data);
  }
};
