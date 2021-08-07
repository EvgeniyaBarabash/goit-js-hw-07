const totalValue = document.querySelector('#value');
const decrementValue = document.querySelector('[data-action="decrement"]');
const incrementValue = document.querySelector('[data-action="increment"]');
decrementValue.addEventListener('click', onDecrementClick);
incrementValue.addEventListener('click', onIncrementClick);
let counterValue = 0;
function onDecrementClick(){
    counterValue -=1;
    totalValue.innerHTML=counterValue;
};
function onIncrementClick(){
    counterValue +=1;
    totalValue.innerHTML=counterValue;
};


// 2 вариант
// function onDecrementClick(){
// totalValue.textContent -=1;
// };
// function onIncrementClick(){
//     totalValue.textContent =Number(totalValue.textContent) + 1;
// };