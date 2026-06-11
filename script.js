//your JS code here. If required.
let title = document.getElementById('title');
let author = document.getElementById('author');
let isbn = document.getElementById('isbn');
let submit = document.getElementById('submit');
let delet = '';
let table = document.getElementById('book-list');
let tbody = document.getElementById('tbody');
let bookList = [
    
]

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (title.value !== '' && author.value !== '' && isbn.value !== '') {
        bookList.push({
            title: title.value,
            author: author.value,
            isbn: isbn.value
        })

        bookRefresh();
    } else {
        alert("Please fill all data.");
        return;
    }
});

bookRefresh();


function bookRefresh() {
    tbody.innerHTML = '';
    bookList?.forEach((data) => {
        tr = document.createElement('tr');
        titleTd = document.createElement('td');
        titleTd.textContent = data?.title;
        tr.appendChild(titleTd);
        authorTd = document.createElement('td');
        authorTd.textContent = data?.author;
        tr.appendChild(authorTd);
        isbnTd = document.createElement('td');
        isbnTd.textContent = data?.isbn;
        tr.appendChild(isbnTd);
        deleteTd = document.createElement('td');
        deleteTd.innerHTML = `<button id="${data?.isbn}" class="delete">x</button>`;
        tr.appendChild(deleteTd);
        tbody.appendChild(tr);
    });
}

tbody?.addEventListener('click',(e)=>{
    e.preventDefault();
    bookList = bookList?.filter((data)=>{
        return data?.isbn !== e.srcElement.id;
    })
    bookRefresh();
})