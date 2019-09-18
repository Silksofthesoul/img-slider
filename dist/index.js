"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var obj = {
    selector: '.contentSlider',
    sliderDOMArray: [],
    sliders: []
  };

  obj.turnOnSlider = function (elem) {
    if (elem.classList.contains('off') || !elem.classList.contains('on')) {
      if (elem.classList.contains('off')) {
        elem.classList.remove('off');
      }

      elem.classList.add('on');
    }
  };

  obj.turnOffSlider = function (elem) {
    if (elem.classList.contains('on') || !elem.classList.contains('off')) {
      if (elem.classList.contains('on')) {
        elem.classList.remove('on');
      }

      elem.classList.add('off');
    }
  };

  obj.addButtons = function (slider) {
    var leftButton = document.createElement('div');
    var rightButton = document.createElement('div');
    leftButton.classList.add('contentSliderBtn');
    leftButton.classList.add('contentSliderBtnLeft');
    rightButton.classList.add('contentSliderBtn');
    rightButton.classList.add('contentSliderBtnRight');
    slider.element.appendChild(leftButton);
    slider.element.appendChild(rightButton);
    return _objectSpread({}, slider, {
      leftButton: leftButton,
      rightButton: rightButton
    });
  };

  obj.addScene = function (slider) {
    var scene = document.createElement('div');
    scene.classList.add('contentSliderScene');
    slider.element.appendChild(scene);
    return _objectSpread({}, slider, {
      scene: scene
    });
  };

  obj.addBackdrop = function (slider) {
    var backdrop = document.createElement('div');
    backdrop.classList.add('contentSliderBackdrop');
    slider.element.appendChild(backdrop);
    return _objectSpread({}, slider, {
      backdrop: backdrop
    });
  };

  obj.addStatusBar = function (slider) {
    if (slider.element.classList.contains('param-statusbar')) {
      var statusBar = document.createElement('div');
      statusBar.classList.add('contentSliderStatusBar');
      slider.element.insertAdjacentElement('afterend', statusBar);
      return _objectSpread({}, slider, {
        statusBar: statusBar
      });
    }

    return _objectSpread({}, slider, {
      statusBar: null
    });
  };

  obj.addDownloadButton = function (slider) {
    if (slider.element.classList.contains('param-downloadbutton')) {
      var downloadButton = document.createElement('div');
      downloadButton.classList.add('contentSliderDownloadButton'); // downloadButton.setAttribute('title', 'DownloadButton');

      slider.element.appendChild(downloadButton);
      return _objectSpread({}, slider, {
        downloadButton: downloadButton
      });
    }

    return _objectSpread({}, slider, {
      downloadButton: null
    });
  };

  obj.setImage = function (currentImage, slider) {
    slider.scene.style.backgroundImage = "url(".concat(slider.urls[currentImage], ")");
    slider.backdrop.style.backgroundImage = "url(".concat(slider.urls[currentImage], ")");
    slider.element.style.backgroundImage = "url(".concat(slider.urls[currentImage], ")");
  };

  obj.setStatusBarText = function (text, slider) {
    if (slider.statusBar) {
      slider.statusBar.innerText = text;
    }
  };

  obj.createDownloader = function (url) {
    var el = document.createElement('a');
    el.setAttribute('href', url);
    el.setAttribute('download', '');
    el.setAttribute('target', '_blank');
    document.body.appendChild(el);
    return el;
  };

  obj.makeSlider = function (element) {
    var Slider = {
      element: element,
      urls: element.innerText.split(/\s/igm).filter(function (item) {
        return item || false;
      }),
      currentImage: 0
    };
    if (Slider.urls.length === 0) return false;
    element.innerText = '';
    Slider = obj.addButtons(Slider);
    Slider = obj.addBackdrop(Slider);
    Slider = obj.addScene(Slider);
    Slider = obj.addStatusBar(Slider);
    Slider = obj.addDownloadButton(Slider);
    Slider.leftButton.addEventListener('click', function () {
      Slider.currentImage--;

      if (Slider.currentImage < 0) {
        Slider.currentImage = Slider.urls.length - 1;
      }

      obj.setImage(Slider.currentImage, Slider);
      obj.setStatusBarText("".concat(Slider.currentImage + 1, " / ").concat(Slider.urls.length), Slider);
    });
    Slider.rightButton.addEventListener('click', function () {
      Slider.currentImage++;

      if (Slider.currentImage > Slider.urls.length - 1) {
        Slider.currentImage = 0;
      }

      obj.setImage(Slider.currentImage, Slider);
      obj.setStatusBarText("".concat(Slider.currentImage + 1, " / ").concat(Slider.urls.length), Slider);
    });

    if (Slider.downloadButton) {
      Slider.downloadButton.addEventListener('click', function () {
        var el = obj.createDownloader(Slider.urls[Slider.currentImage]);
        el.click();
        el.parentNode.removeChild(el);
      });
    }

    if (Slider.element.classList.contains('param-zoom')) {
      var bodyStyle = document.body.getAttribute('style');
      Slider.scene.addEventListener('click', function () {
        if (!Slider.element.classList.contains('zoom')) {
          Slider.element.classList.add('zoom');
          document.body.style.overflow = 'hidden';
        } else {
          Slider.element.classList.remove('zoom');

          if (bodyStyle) {
            document.body.setAttribute('style', bodyStyle);
          } else {
            document.body.removeAttribute('style');
          }
        }
      });
    }

    obj.setImage(Slider.currentImage, Slider);
    obj.setStatusBarText("".concat(Slider.currentImage + 1, " / ").concat(Slider.urls.length), Slider);
    obj.turnOnSlider(Slider.element);
    obj.sliders.push(Slider);
  };

  obj.init = function (element) {
    if (!element) return false;
    obj.sliderDOMArray = _toConsumableArray(element.querySelectorAll(obj.selector));
    if (obj.sliderDOMArray.length === 0) return false;
    obj.sliderDOMArray.forEach(function (item) {
      return obj.makeSlider(item);
    });
  };

  window.contentSlider = obj;
})();