## Key points

1. How to use Web SpeechRecognition?
    ```js
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    ```

2. If you want to show interim results, remember to set config `recognition.interimResults = true;`

3. Listen `result` event to get speech recognition result, you can do other cool stuffs in here, like everything jarivs or siri can do...

4. Restart your recognition in `end` event handler
    ```js
    recognition.addEventListener('end', recognition.start);
    ```

5. `e.results[0].isFinal`, we have this `isFinal` tag to check if recognition finished or not

This is so cool!!