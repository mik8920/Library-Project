const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let bookInfo = `The ${title} by ${author}, ${pages} pages, ${read}`;
    return bookInfo;
  };

  this.info();
}

const book1 = new Book("Harry Potter1", "JK Rowling", "1000", "it is read");
const book2 = new Book("Harry Potter2", "JK Rowling", "1000", "it is read");
const book3 = new Book("Harry Potter3", "JK Rowling", "1000", "it is read");

function addBookToLibrary() {
  for (let i = 0; i++; ) {
    book1.classList.add("book1");
    myLibrary.appndChild(book1);
  }
}

console.log(addBookToLibrary());
