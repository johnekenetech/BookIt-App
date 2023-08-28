// add delete functionality
const list = document.querySelector('#book-list ul');
list.addEventListener('click', (del) => {
    if(del.target.className === 'delete'){
        const li = del.target.parentElement;
        list.removeChild(li);
    }
})

// add form functionality
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', (form) => {
    form.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    // add new list
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add context to the new list 
    bookName.textContent = 'Book title : ' + value;
    deleteBtn.textContent = 'delete';

    // add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append created list to the dom
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li)
    
})

// hide checkbox
const hideBooks = document.querySelector('#hide');
hideBooks.addEventListener('change', (hide) => {
    if(hideBooks.checked){
        list.style.display = 'none';
    } else{
        list.style.display = 'initial';
    }
})

// search filter 
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (search) => {
    const term = search.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.opacity = '70%';
        } else {
            book.style.opacity = '0';
        }
    })

    
})