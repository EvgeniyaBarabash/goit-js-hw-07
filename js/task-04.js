const totalValue = document.querySelector('#value');
const decrementValue = document.querySelector('[data-action="decrement"]');
const incrementValue = document.querySelector('[data-action="increment"]');
// decrementValue.addEventListener('click', onDecrementClick);
// incrementValue.addEventListener('click', onIncrementClick);
// let counterValue = 0;
// function onDecrementClick(){
//     counterValue -=1;
//     totalValue.innerHTML=counterValue;
// };
// function onIncrementClick(){
//     counterValue +=1;
//     totalValue.innerHTML=counterValue;
// };


// 2 вариант
// function onDecrementClick(){
// totalValue.textContent -=1;
// };
// function onIncrementClick(){
//     totalValue.textContent =Number(totalValue.textContent) + 1;
// };

// 3 вариант

function createCounter(){
    let counterValue = 0;
    function increment(){
return counterValue +=1;
    };
    function decrement(){
        return counterValue -=1;
    };
    return {increment, decrement};
};
const createObj = createCounter()
incrementValue.addEventListener('click', (e)=>{
    let value= createObj.increment();
    // console.log(value);
    totalValue.textContent = value;
});
decrementValue.addEventListener('click', (e)=>{
    let value = createObj.decrement();
    // console.log(value);
    totalValue.textContent = value;
});