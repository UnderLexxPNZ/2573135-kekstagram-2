import {numLikes,createComments,numComments} from './util.js';
import { CREATED_PHOTO } from './data.js';
import './thumbnails.js';
import {openBigPicture} from './render-photo.js'

container.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');

  if (currentPictureNode) {
    evt.preventDefault();
    openBigPicture(currentPictureNode.dataSet.pictureId);
  }
});

const createPhoto = () => {
  let id = 1;

  return () => {
    const photo = {};
    photo.id = id;
    photo.url = `photos/${id}.jpg`;
    photo.description = `Фото №${id}`;
    photo.likes = numLikes();
    photo.comments = Array.from({length : numComments()}, createComments());
    id++;
    return photo;

  };
};


export const photoArray = Array.from ({length: CREATED_PHOTO}, createPhoto());


