## Note:
1. Safari transitionend event.propertyName === flex
2. Chrome + FF transitionend event.propertyName === flex-grow
3. Use extra line of code `panels.forEach(panel => panel.classList.remove('open'));` to remove open panels before open another
4. Since we detect `transitionend` event, open-active will toggle itself, we don't need manually remove it from every panels like 2. mentions.
