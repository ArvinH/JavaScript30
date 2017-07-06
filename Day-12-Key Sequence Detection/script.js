(function() {
    let pressed = [];
    const secretCode = 'ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a';
    const codeLen = 8;

    window.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
            pressed = [];
            return;
        }
        pressed.push(e.key);
        pressed.splice(-codeLen - 1, pressed.length - codeLen);
        if (pressed.join(',').includes(secretCode)) {
            // cornify_add();
            window.location = 'https://blog.arvinh.info/';
        }
    });
})();