import axios from "axios";

export const instance = axios.create({
  baseURL: "https://www.googleapis.com/customsearch"
});

export const googleapis = {
  key: "AIzaSyBoCFh5Q-VWqeHVo79qVHiUd7pv1gLXrOw",
  cx: "007074449554332473585:czru3hp7ebi",
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
