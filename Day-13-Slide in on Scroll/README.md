## Key point
Basically, all key point is on the comments in code:

The only thing need to be noted is use readable variable name for helping yourself relealize its purpose.

```js
// select all images for reference later.
  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide() {
    // iterate all images when scroll event issued.
    sliderImages.forEach(sliderImage => {
      // half way through the image
      // scrollY is the distance between top window to scrollbar pos, so we need to add window.innerHeight to get bottom pos of window
      // minus half of image height means image in viewport with its helf height.
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

      // bottom of the image pos on viewport
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      // isHalfShown means images top pos reach the slideInAt (bottom window minus half of image height)
      // we can start to show image
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      // check is image is out of viewport
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
  }
```

Another point is the self-made debounce function, also note in comments:

```js
// self made debounce is cool, we usually use lodash directly.
  function debounce(func, wait = 20, immediate = true) {
      let callNow;
      let timeout;
      // create a new debounced function
      return function() {
        const context = this, args = arguments;
        const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
      };
      // callNow means it should be called immediatly once
      // for example, issue right a way when binding to scroll event listener
      callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
```
