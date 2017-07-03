(function() {
  const checkboxes = document.querySelectorAll('div.inbox input[type=checkbox]');

  let lastCheckItem;
  checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleClick));
  
  function handleClick(e) {
    let startToCheck = false;
    if (e.shiftKey && e.target.checked) {
      checkboxes.forEach((checkbox) => {
        if (e.target === checkbox || checkbox === lastCheckItem) {
          startToCheck = !startToCheck;
        }
        if (startToCheck) {
          checkbox.checked = true;
        }
      });
    }

    lastCheckItem = e.target;
  }
})();