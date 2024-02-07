'use strict'
const button = document.querySelector('.inputs__button');
const chat = document.querySelector('.display');

const avatarArr = [
  [0, 'assets/img/avatars/ava-0.png'],
  [1, 'assets/img/avatars/ava-1.png'],
  [2, 'assets/img/avatars/ava-2.png'],
  [3, 'assets/img/avatars/ava-3.png'],
  [4, 'assets/img/avatars/ava-4.png'],
  [5, 'assets/img/avatars/ava-5.png'],
  [6, 'assets/img/avatars/ava-6.png'],
];

const commentElem = `
  <div class="comment__header">
    <div class="comment__avatar-container">
      <img class="comment__avatar" src="" alt="аватар">
      <h4 class="comment__name"></h4>
    </div>

    <div class="comment__date"></div>
  </div>

  <div class="comment__body"></div>
`;

function createComment() {
  const commentBlock = document.createElement('div');
  commentBlock.classList.add('comment');
  chat.append(commentBlock);
  commentBlock.innerHTML = commentElem;
  addName();
  addAvatar();
  addCommentDate();
  addComment();
}

//name
function addName() {
  const name = document.querySelector('.inputs__name-input');
  const commentNames = document.getElementsByClassName('comment__name');
  if(name.value) {
    commentNames[0].textContent = name.value;
  } else {
    commentNames[0].textContent = 'Username';
  }
  name.value = '';
}

//avatar
function addAvatar() {
  const avatar = document.querySelector('.inputs__avatar-input');
  const commentAvatar = document.querySelector('.comment__avatar');
  const regexp = /^https?:\/\/.+(.png|.jpg|.jpeg|.svg)$/;

  if (regexp.test(avatar.value)) {
    let img = new Image();
    img.src = avatar.value;
    img.onload = function(){commentAvatar.src = img.src;};
    img.onerror = function(){commentAvatar.src = getAvatar();};
  } else {
    commentAvatar.src = getAvatar();
  }
  avatar.value = '';
}

function getAvatar() {
  let n = Math.round(Math.random()*6);
  let ava;

  for (let item of avatarArr) {
    if (item[0] == n) ava = item[1];
  }
  return ava;
}

//date
function addCommentDate() {
  const date = new Date();
  const commentDate = document.querySelector('.comment__date');
  const day = function() {
    switch(date.getDay()) {
      case 0: return 'Воскресенье'; break;
      case 1: return 'Понедельник'; break;
      case 2: return 'Вторник'; break;
      case 3: return 'Среда'; break;
      case 4: return 'Четверг'; break;
      case 5: return 'Пятница'; break;
      case 6: return 'Суббота'; break;
    }
  }

  const shortDate = function() {
    const dayDate = String(date.getDate()).length == 1 ? String(date.getDate()).padStart(2, '0') : String(date.getDate());
    const month = String(date.getMonth()).length == 1 ? String(date.getMonth() + 1).padStart(2, '0') : date.getMonth();
    const year = String(date.getFullYear());
    return `${dayDate}.${month}.${year}`;
  }

  commentDate.textContent = `${day()}, ${shortDate()} в ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

//comment
function addComment() {
  const commentText = document.querySelector('.inputs__comment-input');
  const comment = document.querySelector('.comment__body');
  comment.textContent = commentText.value;
  commentText.value = '';
}


button.addEventListener('click', function() {
  createComment();
});