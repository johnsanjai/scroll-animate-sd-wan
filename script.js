(function() {
  const finalNumber = 247; // Your target number here
  const digitHeight = 72;  // must match CSS .digit height
  const animationDuration = 2000; // ms

  const counterEl = document.getElementById("counter");
  const digits = finalNumber.toString().split('');
  counterEl.innerHTML = '';

  digits.forEach((digitChar, index) => {
    const container = document.createElement('div');
    container.className = 'digit-container';

    const strip = document.createElement('div');
    strip.className = 'digit-strip';

    // Create digits 0-9 stacked vertically
    for (let i = 0; i <= 9; i++) {
      const d = document.createElement('div');
      d.className = 'digit';
      d.textContent = i;
      strip.appendChild(d);
    }

    container.appendChild(strip);
    counterEl.appendChild(container);

    // Apply CSS animation to scroll strip to correct digit
    const digit = parseInt(digitChar, 10);
    const distance = digit * digitHeight;

    // Create a unique animation name for each digit to scroll to correct place
    const animName = `scrollDigit${index}`;

    // Create keyframes dynamically
    const styleSheet = document.styleSheets[0];
    const keyframes =
      `@keyframes ${animName} {
        0% { transform: translateY(0); }
        100% { transform: translateY(-${distance}px); }
      }`;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    // Apply animation to strip
    strip.style.animation = `${animName} ${animationDuration}ms ease-in-out forwards`;
  });
})();
