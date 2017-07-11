## Key points

1. tips: hide the original input button, then use pesudo element for styling.
    ```css
        .plates input + label:before {
            content: '⬜️';
            margin-right: 10px;
        }
    ```
2. localStorage can only store string, stingify before saving.
3. 