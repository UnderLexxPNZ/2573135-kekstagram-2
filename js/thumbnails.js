import { photoArray } from './main.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

photoArray.forEach((item) => {
  const thumbnail = template.cloneNode(deep: true);
  const photo = item;
  const image = thumbnail.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  //записали кол-во коментариев
  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;

  //записали кол-во лайков
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;

  container.appendChild(thumbnail);
  });

  /*
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesNode = document.querySelector('.pictures');
const picturesFragment = document.createDocumentFragment();

photoArray.forEach(({url, comments, likes}) =>{
  const pictureNode = pictureTemplate.cloneNode(true);

  pictureNode.querySelector('.picture__img').src = url;
  pictureNode.querySelector('.picture__comments').textContent = comments.length;
  pictureNode.querySelector('.picture__likes').textContent = likes;
  picturesFragment.appendChild(pictureNode);
});

picturesNode.appendChild(picturesFragment);
*/