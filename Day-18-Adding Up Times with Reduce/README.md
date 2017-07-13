## Key points
1. Data from `document.querySelectorAll()` is NodeList, just a Array-Like not Array, we need `Array.from()` it so that can use array method like `map()`, `reduce()`.
2. Don't forget `map()` function takeing `function` to be used on every item, so instead of doing:
    ```js
    timeCode.split(':').map((node) => {
        return parseFloat(node);
    });
    ```

    we can just pass funtion to it: `timeCode.split(':').map(parseFloat);`

3. Propery use es6 will make your day `const [mins, secs] = timeCode.split(':').map(parseFloat);`

4. In this example, you can use one `reduce()` function to do all the magic, but remember pass first one params (which is 0 in this example) to it.

5. Sometime, short answer may not be good answer, use separated map function seems more clear.
