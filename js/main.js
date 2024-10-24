const MESSAGE_SET = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';
const NAMES_SET = 'Александ, Светлана, Игорь, Екатерина, Евгений, Мария, Сергей, Зинаида, Олег, Татьяна, Вадим, Милана, Демид, Карина';

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const CREATED_PHOTO = 25;

//Функция получения случайного числа из заданного диапазона

const getRandomInteger = (a, b) => {

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  let previousResult = -1;
  return () => {
    const result = Math.floor(Math.random() * (upper - lower + 1) + lower);
    // Исключения повторяющегося значения предыдущего вызова для коментариев
    if (previousResult !== result) {
      previousResult = result;
      return result;
    }
    return result === upper ? lower : result + 1;
  };

};

//Создание вложенного объекта Comments
const createComments = () => {
  let id = 1;
  const messageArray = MESSAGE_SET.split('. ');
  const nameArray = NAMES_SET.split('. ');
  const indexMessageArr = getRandomInteger (0, messageArray.length - 1);
  const indexNameArr = getRandomInteger (0, nameArray.length - 1);

  // Разобьем комментарии с разделителем - !
  messageArray.splice(0, 1, messageArray[0].split('! ')[0],messageArray[0].split('! ')[1]);
  return () => {
    const comment = {};
    const idAvatar = getRandomInteger (1, 6);
    comment.id = id;
    comment.avatar = `img/avatar-${idAvatar()}.svg`;
    comment.message = `${messageArray[indexMessageArr()]}. ${messageArray[indexMessageArr()]}`;
    comment.name = `${nameArray[indexNameArr()]}`;
    id++;
    return comment;
  };

};

//Количество коментариев
const numComments = getRandomInteger (MIN_COMMENTS, MAX_COMMENTS);
//количество лайков
numLikes = getRandomInteger (MIN_LIKES, MAX_LIKES);

const createPhoto = () => {
  let id = 1;

  return () => {
    const photo = {};
    photo.id = id;
    photo.url = `photo/${id}.jpg`;
    photo.description = `Фото №${id}`;
    photo.likes = numLikes();
    photo.comments = Array.from({length : numComments()}, createComments());
    id++;
    return photo;

  };
};


const photoArray = Array.from ({length: CREATED_PHOTO}, createPhoto());
console.log(photoArray);