function createDigitElement() {
  const container = document.createElement('div');
  for (let i = 0; i <= 9; i++) {
    const span = document.createElement('span');
    span.textContent = i;
    container.appendChild(span);
  }
  return container;
}

function updateDigit(id, value) {
  const el = document.getElementById(id);
  el.innerHTML = ''; // Clear existing
  const digitList = createDigitElement();
  el.appendChild(digitList);
  digitList.style.transform = `translateY(-${value * 70}px)`; // 70px = height of digit
}

function animateCounter(target) {
  let count = 0;
  const interval = setInterval(() => {
    if (count > target) {
      clearInterval(interval);
      return;
    }
    const hundreds = Math.floor(count / 100);
    const tens = Math.floor((count % 100) / 10);
    const ones = count % 10;

    updateDigit('hundreds', hundreds);
    updateDigit('tens', tens);
    updateDigit('ones', ones);

    count++;
  }, 30);
}

window.onload = () => {
  animateCounter(247);
};
