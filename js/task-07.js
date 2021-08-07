const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
range.addEventListener('input', onSpanInput);
function onSpanInput(event){
text.style.fontSize = `${event.currentTarget.value}px`; 
};