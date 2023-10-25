// Znajduje element ul#categories
const categoriesList = document.querySelector('#categories');

// Znajduje wszystkie elementy li.item wewnątrz ul#categories
const categoryItems = categoriesList.querySelectorAll('.item');

// Liczy i wyświetla liczbę kategorii
console.log(`Liczba kategorii w ul#categories:`, categoryItems.length);

//Znajduje tytuł oraz liczbę elementów w kategorii
categoryItems.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const categoryList = item.querySelector('ul');
  const numberOfItems = categoryList.querySelectorAll('li').length;

  console.log(`Kategoria:`, title);
  console.log(`Liczba elementów w kategorii:`, numberOfItems);
});
