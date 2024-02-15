const bookDisplay = document.querySelector(".bookDisplay");

const myLibrary = [];

/*the constructor*/
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `The ${title} by ${author}, ${pages} pages, ${read}`;
  };

  this.info();
}

/*stores books into myLibrary array*/
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("Harry Potter1", "JK Rowling", 1000, true);
addBookToLibrary("Harry Potter2", "JK Rowling", 1000, true);
addBookToLibrary("Harry Potter3", "JK Rowling", 1000, false);

/*displays each book on the apge*/
const updateBooks = (title, author, pages, read) => {
  while (bookDisplay.firstChild) {
    bookDisplay.removeChild(bookDisplay.firstChild);
  }
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDisplay.appendChild(bookDiv);

    const titlePara = document.createElement("p");
    titlePara.textContent = `Title: ${book.title}`;
    bookDiv.appendChild(titlePara);

    const authorPara = document.createElement("p");
    authorPara.textContent = `Author: ${book.author}`;
    bookDiv.appendChild(authorPara);

    const pagesPara = document.createElement("p");
    pagesPara.textContent = `Pages: ${book.pages}`;
    bookDiv.appendChild(pagesPara);

    const readPara = document.createElement("p");
    readPara.textContent = `Read: ${book.read ? "Yes" : "No"}`;
    bookDiv.appendChild(readPara);
  }
};

updateBooks();
