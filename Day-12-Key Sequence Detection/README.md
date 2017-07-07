## Key points

1. To remember user inupt, we need a queue to save user input, for keeping queue in fixed length, we need to `splice` array form `back`, because user input push to stack:
    * `pressed.splice(-codeLen - 1, pressed.length - codeLen);` (codeLen is Konami code's length, eq the fixed length)
