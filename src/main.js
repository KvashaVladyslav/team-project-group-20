document.addEventListener('DOMContentLoaded', function () {
  // Отримуємо елементи DOM
  var backdrop = document.getElementById('backdrop');
  var toggleButton = document.getElementById('toggleButton');
  // Додаємо слухач подій для кнопки
  toggleButton.addEventListener('click', function () {
    // Змінюємо клас backdrop при натисканні кнопки
    backdrop.classList.toggle('is-open');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Отримуємо елементи DOM
  var backdrop = document.getElementById('backdrop');
  var toggleButton = document.getElementById('close-btn');
  // Додаємо слухач подій для кнопки
  toggleButton.addEventListener('click', function () {
    // Видаляємо клас "is-open" при натисканні кнопки
    backdrop.classList.remove('is-open');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var backdrop = document.getElementById('backdrop');
  var toggleButton = document.getElementById('about');
  toggleButton.addEventListener('click', function () {
    backdrop.classList.remove('is-open');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var backdrop = document.getElementById('backdrop');
  var toggleButton = document.getElementById('yachts');
  toggleButton.addEventListener('click', function () {
    backdrop.classList.remove('is-open');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var backdrop = document.getElementById('backdrop');
  var toggleButton = document.getElementById('review');
  toggleButton.addEventListener('click', function () {
    backdrop.classList.remove('is-open');
  });
});
