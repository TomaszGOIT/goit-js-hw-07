const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Znajdź element ul#ingredients w dokumencie HTML
const ingredientsList = document.querySelector('#ingredients');

// Towrzy elementy <li> i dodaje je do listy ul#ingredients
ingredients.forEach(ingredient => {
  const listItem = document.createElement('li');

  // Dodaje nazwę składnika
  listItem.textContent = ingredient;

  // Dodaje klasę "item"
  listItem.classList.add('item');

  // Dodaje li do listz ul#ingredients
  ingredientsList.appendChild(listItem);
});
