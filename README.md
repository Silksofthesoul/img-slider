# img-slider

[![NPM version](https://img.shields.io/npm/v/@silksofthesoul/img-slider.svg?style=flat)](https://www.npmjs.com/package/@silksofthesoul/img-slider)

## En

(via Google Translate)
Description: just another js-slider for pictures

### Project structure

Directories:

-   **dist** -- compiled js/css.
-   **imgs** -- pictures for example.
-   **src** -- sources

Files:

-   **index.html** -- page with an example article and two sliders in it.

How to use:

in `<head>` place code like this:

```html
  <link rel="stylesheet" href="dist/reset.css">
  <link rel="stylesheet" href="dist/index.css">
  <!--[if !IE]><!-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js"></script>
  <!--<![endif]-->
  <!-- IE - must die!!1-->
  <script src="./dist/index.js"></script>
```

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
    path/to-image-01.png
    path/to-image-02.png
    path/to-image-03.png
  </div>
```

Image addresses are separated by a space character corresponding to the regular expression `/\s/img` (space / enter)

The parameter classes are available for the container: `.param-statusbar .param-downloadbutton .param-zoom`

-   **.param-statusbar** - Show the status bar. The status displays information about which image on the account from the list is displayed (1/10).
-   **.param-downloadbutton** -- Show upload image button
-   **.param-zoom** -- The ability to deploy the inspector to the entire browser screen.

Example:

```html
  <div class="contentSlider param-statusbar param-downloadbutton param-zoom">
    path/to-image-01.png
    path/to-image-02.png
    path/to-image-03.png
  </div>
```

## Ru

Описание: очередной js-слайдер для картиночек

### Структура

Папки:

-   **dist** -- скомпилированные js/css
-   **imgs** -- картинки для примера.
-   **src** -- исходники

Файлы:

-   **index.html** -- стр. с примером статьи и двумя слайдерами в нем.

как запустить:

В `<head>` вставить код подобный этому:

```html
  <link rel="stylesheet" href="dist/reset.css">
  <link rel="stylesheet" href="dist/index.css">
  <!--[if !IE]><!-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js"></script>
  <!--<![endif]-->
  <!-- IE - must die!!1-->
  <script src="./dist/index.js"></script>
```

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
    path/to-image-01.png
    path/to-image-02.png
    path/to-image-03.png
  </div>
```

Адреса изображений разделяются пробельным символом соответствующим регулярному выражению `/\s/img` (пробел/ввод)

Для контейнера доступны классы-параметры: `.param-statusbar .param-downloadbutton .param-zoom`

-   **.param-statusbar** -- Показывать полосу статуса. В статусе отображается информация о том, какое изображение по счету из списка показывается (1 / 10).
-   **.param-downloadbutton** -- Показывать кнопку "загрузить изображение"
-   **.param-zoom** -- Возможность разворачивать осмотрщик на весь экран браузера.

Пример:

```html
  <div class="contentSlider param-statusbar param-downloadbutton param-zoom">
    path/to-image-01.png
    path/to-image-02.png
    path/to-image-03.png
  </div>
```
