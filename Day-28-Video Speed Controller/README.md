## key points
* Use `playbackRate` to control video speed
* Calculate percentage from `offsetTop` and `offsetHeight`
```js
const y = e.pageY - this.offsetTop;
const percent = y / this.offsetHeight;
```
