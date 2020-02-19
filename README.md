# swapi-app

cra + redux + thunk + axios(testing swApi) <br>
собрал на базе https://github.com/code-rnd/default-app <br>
Взаимодействие с открытой апи "swApi" <br>

# Развернуть фронт локально

<ul>
  <li>Склонируйте ветку <code>dev</code></li>
  <li><code>npm install</code></li>
  <li><code>npm start</code></li>
  <li>Откройте http://localhost:3000, чтобы просмотреть проект в браузере.</li>
  <li>Установите расширение Redux DevTools для браузера, помогает дебажить состояние приложения</li>
 </ul>
 
 # Билд проекта
 <ul>
  <li><code>npm run build</code></li>
  <li>Каталог билда, лежит в корне проекта (./build/)</li>
 </ul>
 
 # Демо проекта
 https://code-rnd.github.io/swapi-app/

# Реализовано

Взаимодействия с апи (запросить, получить и отрисовать группу объектов, по одной из трех возможных категорий ) <br>
Нумерация уникальной карточки, с описанием полученного объекта, ее порядковым номером из поля "url" <br>
