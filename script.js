class Book {
  constructor(author, title, publicationYear, readStatus) {
    this.author = author;
    this.title = title;
    this.publicationYear = publicationYear;
    this.readStatus = readStatus;
  }
}

let library = [];
let form = document.querySelector('form');
let inputAuthor = document.getElementById('author');
let inputTitle = document.getElementById('title');
let inputPublicationYear = document.getElementById('publicationYear');

const tbody = document.querySelector('tbody');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let author = inputAuthor.value;
  let title = inputTitle.value;
  let publicationYear = inputPublicationYear.value;
  let inputReadStatus = document.querySelector('input[name="readStatus"]:checked');
  let readStatus = inputReadStatus.value;

  let book = new Book(author, title, publicationYear, readStatus);

  inputAuthor.value = '';
  inputTitle.value = '';
  inputPublicationYear.value = '';

  library.push(book);
  
  let tableTr = document.createElement('tr');
  let authorTr = document.createElement('td');
  let titleTr = document.createElement('td');
  let publicationYearTr = document.createElement('td');
  let readStatusTr = document.createElement('td');
  let changeReadStatusCell = document.createElement('td');
  let changeReadStatusButton = document.createElement('button');
  let deleteCell = document.createElement('td');
  let deleteButton = document.createElement('button');

  changeReadStatusCell.appendChild(changeReadStatusButton);
  deleteCell.appendChild(deleteButton);

  authorTr.textContent = book.author;
  titleTr.textContent = book.title;
  publicationYearTr.textContent = book.publicationYear;
  readStatusTr.textContent = readStatus;
  
  changeReadStatusButton.textContent = 'Change Read Status';
  changeReadStatusButton.style.margin = 'auto';
  deleteButton.textContent = 'Delete';
  deleteButton.style.margin = 'auto';

  tableTr.appendChild(authorTr);
  tableTr.appendChild(titleTr);
  tableTr.appendChild(publicationYearTr);
  tableTr.appendChild(readStatusTr);
  tableTr.appendChild(changeReadStatusCell);
  tableTr.appendChild(deleteCell);

  tbody.appendChild(tableTr);

  changeReadStatusButton.addEventListener('click', () => {
    if (readStatusTr.textContent == 'Yes') {
      readStatusTr.innerText = 'No';
    } else {
      readStatusTr.innerText = 'Yes';
    }
  });

  deleteButton.addEventListener('click', () => {
    tbody.removeChild(tableTr);
  });
});
