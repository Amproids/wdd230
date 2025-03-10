const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value == '') {
        alert('Please enter a book and chapter.');
        focus(input);
    }
    else {
        const listItem = document.createElement('li');
        const deleteItem = document.createElement('button');
        listItem.innerHTML = input.value;
        deleteItem.textContent = '❌';
        deleteItem.addEventListener('click', () => {
            list.removeChild(listItem);
        });
        listItem.appendChild(deleteItem);
        list.appendChild(listItem);
        input.value = '';
        focus(input);
    }
});