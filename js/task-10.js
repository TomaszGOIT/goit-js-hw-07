function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Funkcja tworząca kolekcję elementów
function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

// Funkcja czyszcząca kolekcję elementów
function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

// Dodawanie kontenera
createButton.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});

// Usuwanie kontenerów
destroyButton.addEventListener('click', destroyBoxes);
