## Key points

1. There are four basic steps to start drawing on canvas:
    * `ctx.beginPath();` 
    * `ctx.moveTo(lastX, lastY);` // start from
    * `ctx.lineTo(e.offsetX, e.offsetY);` // go to
    * `ctx.stroke();`

2. `globalCompositeOperation` can apply many different blend mode
    * [CompositeOperation MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

3. Have to keep update `lastX` and `lastY` which is your start point. (Initialize at mousedown, then update it on drawing)

4. Use `ctx.clearRect(0, 0, canvas.width, canvas.height)` to clean canvas.

5. [lineCap](https://www.w3schools.com/tags/canvas_linecap.asp): style in each end of line.

6. [lineJoin](https://www.w3schools.com/tags/canvas_linejoin.asp): style when two line meet.


## Note

* The first value in hsl is interesting, when value larger than 360, the color will repeat from zero while value keep growing. We reset it when larger than 360 though.
* ES6 assign: [lastX, lastY] = [e.offsetX, e.offsetY];

![Screenshot](./screenshot.png)
