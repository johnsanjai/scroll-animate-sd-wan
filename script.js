window.onload = () => {
  let target = 247;
  let count = 0;
  const el = document.getElementById('scroll-number');

  const updateCounter = () => {
    if (count <= target) {
      el.textContent = count.toString().padStart(3, '0');
      el.style.transform = 'translateY(-5px)';
      setTimeout(() => {
        el.style.transform = 'translateY(0)';
      }, 100);
      count++;
      setTimeout(updateCounter, 30);
    }
  };

  updateCounter();
};
