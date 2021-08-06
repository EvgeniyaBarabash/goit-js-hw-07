const listCategories = document.getElementById('categories');
console.log(listCategories);
function getChidrenByList (){
    const amountOfItem = listCategories.children.length;
return `B списке ${amountOfItem} категории.`
};
console.log(getChidrenByList ());
const items = listCategories.querySelectorAll('.item');
console.log(items);
items.forEach(elem=>{
    console.log('Категория:', elem.getElementsByTagName('h2')[0].textContent);
    console.log('Количество элементов:', elem.getElementsByTagName('li').length);
});

