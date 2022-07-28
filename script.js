class Book {
  constructor(author, title, publicationYear) {
    this.author = author;
    this.title = title;
    this.publicationYear = publicationYear;
  }
}

let library = [];
const form = document.querySelector('form');
let inputAuthor = document.getElementById('author');
let inputTitle = document.getElementById('title');
let inputPublicationYear = document.getElementById('publicationYear');
const tbody = document.querySelector('tbody');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let author = inputAuthor.value;
  let title = inputTitle.value;
  let publicationYear = inputPublicationYear.value;

  let book = new Book(author, title, publicationYear);

  inputAuthor.value = '';
  inputTitle.value = '';
  inputPublicationYear.value = '';

  library.push(book);
  
  let tableTr = document.createElement('tr');
  let authorTr = document.createElement('td');
  let titleTr = document.createElement('td');
  let publicationYearTr = document.createElement('td');
  authorTr.textContent = book.author;
  titleTr.textContent = book.title;
  publicationYearTr.textContent = book.publicationYear;
  tableTr.appendChild(authorTr);
  tableTr.appendChild(titleTr);
  tableTr.appendChild(publicationYearTr);
  tbody.appendChild(tableTr);
});
