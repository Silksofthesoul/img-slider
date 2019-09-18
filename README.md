# img-slider
[![NPM version](https://img.shields.io/npm/v/@silksofthesoul/img-slider.svg?style=flat)](https://www.npmjs.com/package/@silksofthesoul/img-slider)

## En

(via Google Translate)
Description: just another js-slider for pictures

### Project structure

Directories:

-   **dist** -- compiled js script that will work fine in most browsers. (!! Recommended for require.)
-   **imgs** -- pictures for example.
-   **src** -- js sources - will work in modern browsers, but problems can be in Internet Explorer(Edge, and other stupid software). (Not recommended for connection.)

Files:

-   **index.css** -- css styles
-   **index.html** -- page with an example article and two sliders in it.

How to use:

At the end of `<body>` place the code:

```html
  <script>
    let element = document.querySelector('.content'); // insert the desired selector
    contentSlider.init(element); // or as an argument pass the DOM element
  </script>
```

Or on the DOMContentLoaded event, call:

```JavaScript
  contentSlider.init(element);
```

in the right place where the slider should be located place html:

```html
  <div class="contentSlider">
    imgs/wallhaven-758999.png
    imgs/wallhaven-759002.png
    imgs/wallhaven-759016.png
    imgs/wallhaven-759233.png
    imgs/wallhaven-759234.png
    imgs/wallhaven-759749.png
    imgs/wallhaven-771572.png
    imgs/wallhaven-774051.png
    imgs/wallhaven-774058.png
  </div>
```

Image addresses are separated by a space character corresponding to the regular expression `/\s/img` (space / enter)

The parameter classes are available for the container: `.param-statusbar .param-downloadbutton .param-zoom`

-   **.param-statusbar** - Show the status bar. The status displays information about which image on the account from the list is displayed (1/10).
-   **downloadbutton** -- Show upload image button
-   **param-zoom** -- The ability to deploy the inspector to the entire browser screen.

Example:

```html
  <div class="contentSlider param-statusbar param-downloadbutton param-zoom">
    imgs/wallhaven-758999.png
    imgs/wallhaven-759002.png
    imgs/wallhaven-759016.png
  </div>
```

## Ru

Описание: очередной js-слайдер для картиночек

### Структура

Папки:

-   **dist** -- скомпилированный js скрипт который будет работать нормально в большинстве браузеров. (!!Рекомендуется к подключению.)
-   **imgs** -- картинки для примера.
-   **src** -- исходники js -- будут работать в современных браузерах, но проблемы могут быть в ie. (Не рекомендуется к подключению.)

Файлы:

-   **index.css** -- стили
-   **index.html** -- стр. с примером статьи и двумя слайдерами в нем.

как запустить:

В конце `<body>` разместить код:

```html
  <script>
    let element = document.querySelector('.content'); // вставить нужный селектор
    contentSlider.init(element); // или как аргумент передать DOM элемент
  </script>
```

или по событию DOMContentLoaded вызвать:

```JavaScript
  contentSlider.init(element);
```

в нужном месте, где должен располагаться слайдер разместить html:

```html
  <div class="contentSlider">
    imgs/wallhaven-758999.png
    imgs/wallhaven-759002.png
    imgs/wallhaven-759016.png
    imgs/wallhaven-759233.png
    imgs/wallhaven-759234.png
    imgs/wallhaven-759749.png
    imgs/wallhaven-771572.png
    imgs/wallhaven-774051.png
    imgs/wallhaven-774058.png
  </div>
```

Адреса изображений разделяются пробельным символом соответствующим регулярному выражению `/\s/img` (пробел/ввод)

Для контейнера доступны классы-параметры: `.param-statusbar .param-downloadbutton .param-zoom`

-   **.param-statusbar** -- Показывать полосу статуса. В статусе отображается информация о том, какое изображение по счету из списка показывается (1 / 10).
-   **downloadbutton** -- Показывать кнопку "загрузить изображение"
-   **param-zoom** -- Возможность разворачивать осмотрщик на весь экран браузера.

Пример:

```html
  <div class="contentSlider param-statusbar param-downloadbutton param-zoom">
    imgs/wallhaven-758999.png
    imgs/wallhaven-759002.png
    imgs/wallhaven-759016.png
  </div>
```
