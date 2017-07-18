## Key points:

1. How to get user webcam permission?
    ```js
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            //...
        })
        .catch(err => {
            //...
        });
    ```

2. How to show webcam result?
    ```js
    video.src = window.URL.createObjectURL(localMediaStream);
    video.play();
    ```

3. All effects follow one simple rule: **take the pixels out**, **mess with them**, **put it back**
    ```js
    function paintToCanvas() {
        const width = video.videoWidth;
        const height = video.videoHeight;
        canvas.width = width;
        canvas.height = height;

        return setInterval(() => {
            ctx.drawImage(video, 0, 0, width, height);

            // get pixels out
            let pixels = ctx.getImageData(0, 0, width, height);
            
            // mess with them
                // pixels = redEffect(pixels);
                // pixels = rgbSplit(pixels);
                // ctx.globalAlpha = 0.8;
                // pixels = greenScreen(pixels);
            
            // put them back!
            ctx.putImageData(pixels, 0, 0);
        }, 16);
    }
    ```

4. How to take the data out of the canvas?
    ```js
    const data = canvas.toDataURL('image/jpeg');
    ```
5. Pixels data are arrays(Uint8ClampedArray) of RGB (repeatly), so you can mess with them like:
    ```js
    for(let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    ```

6. How to get Base64 Img data from canvas?
    ```js
    const data = canvas.toDataURL('image/jpeg');
    ```

7. How to create download link in element?
    ```js
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
    strip.insertBefore(link, strip.firsChild);
    ```
