## Key points

1. `e.shiftKey` to check if user hold shifkey
2. `e.target` somtimes equal to `this` in event handler, but they are actually different.
    * `this` refer to the element who be attached handler, `e.target` is the event been trigger at moment, sometimes `e.target` could be children of `this` (For example, you may attach listener on `ul`, then click `li` will also trigger that handler, but in this context, `this` is `ul` and `e.target` would be `li`).
3. Use binary operator to contorl your flag. ex. `startToCheck = !startToCheck;`
4. For loop every thing and check with flag to decide should be checked or not
