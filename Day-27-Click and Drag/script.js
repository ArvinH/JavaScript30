(function() {
  const slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault(); // stop any selecting text or other browser default behavior
    const x = e.pageX - slider.offsetLeft; // re-calcute cursor position
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk; // use origin scrollLeft to minus your walk steps
  });
})();