const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const newListOfIngredients = document.getElementById('ingredients');
  console.log(newListOfIngredients);
const itemOfList = ingredients.map(elem=>{
  const item=document.createElement('li');
  item.textContent=elem;
  return item;
})

  newListOfIngredients.append(...itemOfList);
