import axios from "axios";

export const instance = axios.create({
  baseURL: "https://www.googleapis.com/customsearch"
});

export const googleapis = {
  key: "none",
  cx: "none",
  otherAttrUrl: "star wars",

  // получить объект, включая урл на изображение
  getImage(searchString) {
    return instance
      .get(
        `v1?key=${this.key}&cx=${this.cx}&q=${this.otherAttrUrl} ${searchString}`
      )
      .then(response => response.data);
  }
};
