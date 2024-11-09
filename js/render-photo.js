const
const socialCommentTemplate = socialCommentNode.querySelector('.social__comment');
const commentCaptionNode = bigPicturesNode.querySelector('.social__caption');
const commentsCountNode = bigPicturesNode.querySelector('.social__comment-count');
const commentsLoaderNode = bigPicturesNode.querySelector('.social__comment-loader');
const bigPictureCancelNode = bigPicturesNode.querySelector('.big-picture__cancel');

const onBigPictureCancelClick = () => {
  closeBigPicture();
}

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
};

const closeBigPicture = () => {
  bigPictureNode.classList.add('hiden');
  bigPictureCancelNode.removeEventListener('click', onBigPictureCancelClick);
  document.removeEventListener('keydown', onEscKeydown);
};

const openBigPicture = (pictureId) => {
  const currentPhoto = photos.find((photo) => photo.id ===(pictureId));
  const socialCommentsFragment = document.createDocumentFragment();

  bigPictureImgNode.src = currentPhoto.url;
  likesCountNode.textContent = currentPhoto.likes;
  socialCommentsNode.innerHTML = '';

  currentPhoto.comments.forEach((comment) => {
    const socialCommentNode = socialCommentTemplate.cloneNode(true);

    socialCommentNode.querySelector('.social__picture').src = comment.avatar;
    socialCommentNode.querySelector('.social__picture').alt = comment.name;
    socialCommentNode.querySelector('.social__text').textContent = comment.message;

    socialCommentsFragment.appendChild(socialCommentsNode);
  });

  socialCommentNode.appendChild(socialCommentsFragment);
  commentCaptionNode.textContent = currentPhoto.description;
  commentsCountNode.classList.add('hidden');
  commentsLoaderNode.classList.add('hidden');

  bigPictureNode.classList.remove('hidden');
  //обработчик назатия на крестик
  bigPictureCancelNode.addEventListener('click', onBigPictureCancelClick);
  document.body.classList.add('modal-open');
  //обработчик нажатия на Esc
  document.addEventListener('keydown', onEscKeydown);
}

export {openBigPicture};