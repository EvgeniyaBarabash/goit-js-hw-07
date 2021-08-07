const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
// 1вариант
  const newListOfIngredients = document.getElementById('ingredients');
  console.log(newListOfIngredients);
const itemOfList = ingredients.map(elem=>{
  const item=document.createElement('li');
  item.textContent=elem;
  return item;
})
  newListOfIngredients.append(...itemOfList);

// 2 вариант
// const markup = ingredients.reduce(
//   (string, item) => string + `<li>${item}</li>`,
//   ""
// );
// console.log(markup);
// newListOfIngredients.innerHTML = markup;
