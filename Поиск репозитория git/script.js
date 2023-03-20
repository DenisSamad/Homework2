// Получаем элементы DOM
const input = document.getElementById("input"); // поле ввода
const button = document.getElementById("button"); // кнопка отправки
const list = document.getElementById("list"); // список результатов
const message = document.getElementById("message"); // сообщение об ошибке или отсутствии результатов


button.addEventListener("click", search);
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    search();
  }
});


function search() {
  const query = input.value.trim();

  if (query.length < 3) {
    message.textContent = "Введите не менее трех символов";
    list.innerHTML = "";
    return;
  }

  message.textContent = "";
  const url = `https://api.github.com/search/repositories?q=${query}&per_page=10`;
  fetch(url)
    .then((response) => response.json()) 
    .then((data) => {
      if (data.total_count === 0) {
        message.textContent = "Ничего не найдено";
        list.innerHTML = "";
      } else {
        list.innerHTML = data.items.map((item) => {
          return `
            <li>
              <a href="${item.html_url}" target="_blank">${item.name}</a>
              <p>${item.description}</p>
              <span>⭐${item.stargazers_count}</span>
            </li>
          `;
        }).join("");
      }
    })
    .catch((error) => console.error(error)); 
}