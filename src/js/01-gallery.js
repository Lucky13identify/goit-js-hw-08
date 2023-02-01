// Add imports above this line
// import { galleryItems } from "./gallery-items";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
// test
// test
// test

// Получаем доступ к div gallery, вешаем слушателей, добавляем разметку

const containerGallery = document.querySelector('.gallery');
const body = document.querySelector('body');
const photosCards = createMarkup(galleryItems);
containerGallery.insertAdjacentHTML('afterbegin', photosCards);
// containerGallery.addEventListener("click", onCardImgClickTarget);

// Функция перебирает масив и создает новый масив элементов + содает разметку

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>`;
    })
    .join('');
}

// Функция возвращает ссылку на большой URL картинки и заменяет его при клики на выбранное img

// function onCardImgClickTarget(evt) {
//   evt.preventDefault();
//   if (!evt.target.classList.contains("gallery__image")) {
//     return;
//   }

// }
