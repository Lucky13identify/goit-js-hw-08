// import Player from "@vimeo/player";
// import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(localeStorageTyping, 1000));

// Функция записывает отслеживаемое событие и записывает его (секунды),
//  как значение в локалСторедж

function localeStorageTyping() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
      // seconds = the current playback position
    })
    .catch(function (error) {
      // an error occurred
    });
}

// Вызываем метод для изменения текущего времени видео после перезагрузки страницы

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
