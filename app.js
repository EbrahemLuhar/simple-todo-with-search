const searchForm = document.querySelector('.js-search-form');
const searchInput = document.querySelector('.js-search-input');
const listParent = document.querySelector('.js-list-group');
const addItemForm = document.querySelector('.js-add-form');
const addItemInput = document.querySelector('.js-add-input');

/**
 * Add new task
 */
function addNewTask(newItem) {
  const newListItem = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="list-group-text">${newItem}</span>
    <i class="list-group-icon far fa-trash-alt delete"></i>
  </li>
  `;
  listParent.innerHTML += newListItem;
}

addItemForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newItem = addItemInput.value.trim();
  // Check if empty
  if (newItem.length) {
    addNewTask(newItem);
  }
});

/**
 * Delete task
 */
listParent.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target.classList.contains('js-delete')) {
    e.target.parentElement.remove();
  }
})

/**
 * Search task
 */
searchInput.addEventListener('keyup', (e) => {
  const searchText = e.target.value.toLowerCase();
  console.log(searchText);
  
  listParent.querySelectorAll('span').forEach(item => {
    if (!item.textContent.toLocaleLowerCase().includes(searchText)) {
      item.parentNode.classList.add('d-none');
    } else {
      item.parentNode.classList.remove('d-none');
    }
  });
});