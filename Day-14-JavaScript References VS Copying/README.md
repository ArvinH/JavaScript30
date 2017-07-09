## Key points

1. Only primitive values can copy by assign
2. Object, and Array need some hack
    * For array, there are 4 ways:
        - `const team2 = players.slice();`
        - `const team3 = [].concat(players);`
        - `const team4 = [...players];`
        - `const team5 = Array.from(players);`
    * For object, there are 3 ways:
        - `const cap2 = Object.assign({}, person, { number: 99, age: 12 });` (only one-level copy)
        - `const cap3 = {...person};` (need babel for now and only one-level copy)
        - `const dev2 = JSON.parse(JSON.stringify(wes));` (kinda cheating but clone deep)
