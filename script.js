(function () {
  const finalNumber = 247;
  const digitHeight = 96;
  const animationDuration = 2000;

  const counterEl = document.getElementById("counter");
  const digits = finalNumber.toString().split('');
  counterEl.innerHTML = '';

  digits.forEach((digitChar, index) => {
    const container = document.createElement('div');
    container.className = 'digit-container';

    const strip = document.createElement('div');
    strip.className = 'digit-strip';

    for (let i = 0; i <= 9; i++) {
      const d = document.createElement('div');
      d.className = 'digit';
      d.textContent = i;
      strip.appendChild(d);
    }

    container.appendChild(strip);
    counterEl.appendChild(container);

    const digit = parseInt(digitChar, 10);
    const distance = digit * digitHeight;
    const animName = `scrollDigit${index}`;

    const styleSheet = document.styleSheets[0];
    const keyframes =
      `@keyframes ${animName} {
        0% { transform: translateY(0); }
        100% { transform: translateY(-${distance}px); }
      }`;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    strip.style.animation = `${animName} ${animationDuration}ms cubic-bezier(0.33, 1, 0.68, 1) forwards`;
  });
})();
