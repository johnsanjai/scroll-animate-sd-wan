let target = 247;
let count = 0;
let el = document.getElementById('scroll-number');

let interval = setInterval(() => {
  count += 1;
  el.textContent = count.toString().padStart(3, '0');
  if (count >= target) clearInterval(interval);
}, 30);
