(() => {
  const obj = {
    selector: '.contentSlider',
    sliderDOMArray: [],
    sliders: [],
  };

  obj.turnOnSlider = (elem) => {
    if (elem.classList.contains('off') || !elem.classList.contains('on')) {
      if (elem.classList.contains('off')) {
        elem.classList.remove('off');
      }
      elem.classList.add('on');
    }
  };

  obj.turnOffSlider = (elem) => {
    if (elem.classList.contains('on') || !elem.classList.contains('off')) {
      if (elem.classList.contains('on')) {
        elem.classList.remove('on');
      }
      elem.classList.add('off');
    }
  };

  obj.addButtons = (slider) => {
    const leftButton = document.createElement('div');
    const rightButton = document.createElement('div');

    leftButton.classList.add('contentSliderBtn');
    leftButton.classList.add('contentSliderBtnLeft');
    rightButton.classList.add('contentSliderBtn');
    rightButton.classList.add('contentSliderBtnRight');
    slider.element.appendChild(leftButton);
    slider.element.appendChild(rightButton);
    return {
      ...slider,
      leftButton,
      rightButton,
    };
  };

  obj.addScene = (slider) => {
    const scene = document.createElement('div');
    scene.classList.add('contentSliderScene');
    slider.element.appendChild(scene);
    return {
      ...slider,
      scene,
    };
  };

  obj.addBackdrop = (slider) => {
    const backdrop = document.createElement('div');
    backdrop.classList.add('contentSliderBackdrop');
    slider.element.appendChild(backdrop);
    return {
      ...slider,
      backdrop,
    };
  };

  obj.addStatusBar = (slider) => {
    if (slider.element.classList.contains('param-statusbar')) {
      const statusBar = document.createElement('div');
      statusBar.classList.add('contentSliderStatusBar');
      slider.element.insertAdjacentElement('afterend', statusBar);
      return {
        ...slider,
        statusBar,
      };
    }
    return {
      ...slider,
      statusBar: null,
    };
  };
  obj.addDownloadButton = (slider) => {
    if (slider.element.classList.contains('param-downloadbutton')) {
      const downloadButton = document.createElement('div');
      downloadButton.classList.add('contentSliderDownloadButton');
      // downloadButton.setAttribute('title', 'DownloadButton');
      slider.element.appendChild(downloadButton);
      return {
        ...slider,
        downloadButton,
      };
    }
    return {
      ...slider,
      downloadButton: null,
    };
  };

  obj.setImage = (currentImage, slider) => {
    slider.scene.style.backgroundImage = `url(${slider.urls[currentImage]})`;
    slider.backdrop.style.backgroundImage = `url(${slider.urls[currentImage]})`;
    slider.element.style.backgroundImage = `url(${slider.urls[currentImage]})`;
  };
  obj.setStatusBarText = (text, slider) => {
    if (slider.statusBar) {
      slider.statusBar.innerText = text;
    }
  };

  obj.createDownloader = (url) => {
    const el = document.createElement('a');
    el.setAttribute('href', url);
    el.setAttribute('download', '');
    el.setAttribute('target', '_blank');
    document.body.appendChild(el);
    return el;
  };

  obj.makeSlider = (element) => {
    let Slider = {
      element,
      urls: element.innerText.split(/\s/igm).filter((item) => (item || false)),
      currentImage: 0,
    };

    if (Slider.urls.length === 0) return false;
    element.innerText = '';
    Slider = obj.addButtons(Slider);
    Slider = obj.addBackdrop(Slider);
    Slider = obj.addScene(Slider);
    Slider = obj.addStatusBar(Slider);
    Slider = obj.addDownloadButton(Slider);
    Slider.leftButton.addEventListener('click', () => {
      Slider.currentImage--;
      if (Slider.currentImage < 0) {
        Slider.currentImage = Slider.urls.length - 1;
      }
      obj.setImage(Slider.currentImage, Slider);
      obj.setStatusBarText(`${Slider.currentImage + 1} / ${Slider.urls.length}`, Slider);
    });
    Slider.rightButton.addEventListener('click', () => {
      Slider.currentImage++;
      if (Slider.currentImage > Slider.urls.length - 1) {
        Slider.currentImage = 0;
      }
      obj.setImage(Slider.currentImage, Slider);
      obj.setStatusBarText(`${Slider.currentImage + 1} / ${Slider.urls.length}`, Slider);
    });
    if (Slider.downloadButton) {
      Slider.downloadButton.addEventListener('click', () => {
        const el = obj.createDownloader(Slider.urls[Slider.currentImage]);
        el.click();
        el.parentNode.removeChild(el);
      });
    }
    if (Slider.element.classList.contains('param-zoom')) {
      const bodyStyle = document.body.getAttribute('style');
      Slider.scene.addEventListener('click', () => {
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
    obj.setStatusBarText(`${Slider.currentImage + 1} / ${Slider.urls.length}`, Slider);

    obj.turnOnSlider(Slider.element);

    obj.sliders.push(Slider);
  };


  obj.init = (element) => {
    if (!element) return false;
    obj.sliderDOMArray = [...element.querySelectorAll(obj.selector)];
    if (obj.sliderDOMArray.length === 0) return false;
    obj.sliderDOMArray.forEach((item) => obj.makeSlider(item));
  };
  window.contentSlider = obj;
})();
