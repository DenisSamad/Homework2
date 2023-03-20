const commentsForm = document.querySelector(".comments__form");
const commentsList = document.querySelector(".comments__list");

function formatDate(date) {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
  const isYesterday =
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear();

  if (isToday) {
    return `сегодня, ${date.toLocaleTimeString()}`;
  } else if (isYesterday) {
    return `вчера, ${date.toLocaleTimeString()}`;
  } else {
    return date.toLocaleString();
  }
}

function addComment(name, text, date) {
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="comment__name">${name}</div>
    <div class="comment__text">${text}</div>
    <div class="comment__date">${formatDate(date)}</div>
    <button class="comment__delete"><img class = "delete-button" src="./img/delete.png" /img></button>
    <button class="comment__like"><img class="like" src="./img/like.png" /img></button>`;
  const like = document.createElement("i");
  like.className = "comment__like";

  li.appendChild(like);
  commentsList.appendChild(li);


  const deleteButton = li.querySelector(".comment__delete");
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  const likeButton = li.querySelector(".comment__like");
  likeButton.addEventListener("click", function() {
    let textNode = document.createTextNode("Вам нравится");
    like.appendChild(textNode);
  });

}

function clearForm() {
  commentsForm.reset();
}

function showErrorMessage(input, message) {
  const errorSpan = document.querySelector(
    `.error-message[data-for="${input.name}"]`
  );
  errorSpan.textContent = message;
}

function hideErrorMessage(input) {
  const errorSpan = document.querySelector(
    `.error-message[data-for="${input.name}"]`
  );
  errorSpan.textContent = "";
}

function validateForm() {
  let isValid = true;

  if (!commentsForm.name.value) {
    showErrorMessage(commentsForm.name, "Пожалуйста, введите имя");
    isValid = false;
  } else {
    hideErrorMessage(commentsForm.name);
  }

  if (!commentsForm.text.value) {
    showErrorMessage(commentsForm.text, "Пожалуйста, введите комментарий");
    isValid = false;
  } else {
    hideErrorMessage(commentsForm.text);
  }

  return isValid;
}

commentsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  const name = commentsForm.name.value;
  const text = commentsForm.text.value;
  const date = commentsForm.date.value
    ? new Date(commentsForm.date.value)
    : new Date();

  addComment(name, text, date);
  clearForm();
});
