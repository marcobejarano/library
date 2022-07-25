class Book {
  constructor(author, title, publicationYear) {
    this.author = author;
    this.title = title;
    this.publicationYear = publicationYear;
  }
}

let library = [];
const form = document.getElementById('forms');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let publicationYear = document.getElementById('publicationYear').value;

  let book = new Book(author, title, publicationYear);

  library.push(book);
})
