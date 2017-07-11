(function() {
  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const deleteButton = document.querySelector('.removeBtn');
  const items = JSON.parse(localStorage.getItem('items')) || [];

  function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
      text,
      done: false
    };

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  }

  function removeItem(el) {
    const abandonIndex = el.dataset.index;
    items.splice(abandonIndex, 1);
  
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
  }

  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
          <button class="removeBtn" data-index=${i}>X</button>
        </li>
      `;
    }).join('');
  }

  function toggleDone(e) {
    if (!e.target.matches('input') && !e.target.matches('button')) return; // skip this unless it's an input or button
    const el = e.target;
    const index = el.dataset.index;
    if (el.matches('button')) {
      removeItem(el);
    } else {
      items[index].done = !items[index].done;
      localStorage.setItem('items', JSON.stringify(items));
      populateList(items, itemsList);
    }
  }

  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);

  populateList(items, itemsList);
})()