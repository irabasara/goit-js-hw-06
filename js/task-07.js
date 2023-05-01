const rangeSizeEl = document.querySelector('#font-size-control');
const textSpanEl = document.querySelector('#text');

const onRangeSize = event => 
    textSpanEl.style.fontSize = `${event.currentTarget.value}px`;

rangeSizeEl.addEventListener('input', onRangeSize);
