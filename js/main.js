onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titleElement = document.getElementById('title');

    // Create the greeting line above the main title
    const greetingElement = document.createElement('span');
    greetingElement.id = 'greeting';
    greetingElement.style.display = 'block';
    greetingElement.style.fontSize = 'clamp(20px, 5vw, 36px)';
    greetingElement.style.letterSpacing = '4px';
    greetingElement.style.marginBottom = '12px';
    titleElement.parentElement.insertBefore(greetingElement, titleElement);

    // Types text one character at a time, then runs onDone (if given)
    function typeText(element, text, speed, onDone) {
      let index = 0;

      function next() {
        if (index < text.length) {
          element.textContent += text[index];
          index++;
          setTimeout(next, speed);
        } else if (onDone) {
          onDone();
        }
      }

      next();
    }

    // First the greeting, then a short pause, then "I LOVE U"
    typeText(greetingElement, "HAPPY WOMEN'S DAY", 150, () => {
      setTimeout(() => typeText(titleElement, 'I LOVE U', 300), 400);
    });

    clearTimeout(c);
  }, 1000);
};