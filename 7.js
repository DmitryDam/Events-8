'use strict';

const galleryItems = [
  {
    preview: 'img/1s.jpeg',
    fullview: 'img/1b.jpeg',
    alt: 'alt text 1',
  },
  {
    preview: 'img/2s.jpeg',
    fullview: 'img/2b.jpeg',
    alt: 'alt text 2',
  },
  {
    preview: 'img/3s.jpeg',
    fullview: 'img/3b.jpeg',
    alt: 'alt text 3',
  },
  {
    preview: 'img/4s.jpeg',
    fullview: 'img/4b.jpeg',
    alt: 'alt text 4',
  },
  {
    preview: 'img/5s.jpeg',
    fullview: 'img/5b.jpeg',
    alt: 'alt text 5',
  },
  {
    preview: 'img/6s.jpeg',
    fullview: 'img/6b.jpeg',
    alt: 'alt text 6',
  },
];

const gallery = document.querySelector('.image-gallery');
gallery.append(makeBigPhoto(), makeUl());
const fullImage = document.querySelector('.image-fullview');

// Делаем большую фотку
function makeBigImg(imgFromArray) {
  const imgBig = document.createElement('img');
  imgBig.classList.add('image-fullview');
  imgBig.setAttribute('src', imgFromArray[2].fullview);
  imgBig.setAttribute('alt', imgFromArray[2].alt);
  return imgBig;
}

// Помещаем большую фотку в DIV
function makeBigPhoto() {
  const fullview = document.createElement('div');
  fullview.classList.add('fullview');
  fullview.append(makeBigImg(galleryItems));
  return fullview;
}

// Делаем маленькие фотки в LI, навешиваем атрибуты
function makeSmallPhoto(imgFromArray) {
  let slider = [];
  imgFromArray.forEach(elem => {
    console.log('elem', elem);
    const li = document.createElement('li');
    const smallImg = document.createElement('img');
    smallImg.setAttribute('src', elem.preview);
    // Маленькому элементу в собственном атрибуте даем ссылку на большое изображение
    smallImg.setAttribute('data-newsrc', elem['fullview']);
    // Стандарт HTML5 специально разрешает атрибуты data-* и 
    // резервирует их для пользовательских данных.
    // При этом во всех браузерах, кроме IE10-, к таким атрибутам
    // можно обратиться не только как к атрибутам, но и как к свойствам,
    // при помощи специального свойства dataset:
    // https://learn.javascript.ru/attributes-and-custom-properties
    smallImg.setAttribute('alt', elem['alt']);
    li.append(smallImg);
    slider.push(li);
  });
  return slider;
}

// Делаем контейнер UL и помещаем туда массив с маленькими фотками
function makeUl() {
  const ul = document.createElement('ul');
  ul.classList.add('preview')
  ul.append(...makeSmallPhoto(galleryItems));
  return ul;
}


function onListClick(event) {
  const nodeName = event.target.nodeName;
  if (nodeName !== 'IMG') return;
  console.log (event.target);
  console.log(event.target.dataset);
  fullImage.setAttribute('src', event.target.dataset.newsrc);
  // dataset.newsrc - обращаемся к записанному ранее свойству
  // smallImg.setAttribute('data-newsrc', elem['fullview']);
const images = document.querySelectorAll('img');
  images.forEach(image => {
    if (image !== event.target) {
      image.classList.remove('active');
    } else {
      image.classList.add('active');
    }
  });
}
// Обработчик события вешаем на контейнер ul
document.querySelector('ul').addEventListener('click', onListClick);