const bookDisplay = document.querySelector(".bookDisplay");
const showButton = document.querySelector(".showDialog");
const favDialog = document.querySelector(".favDialog");
const confirmBtn = favDialog.querySelector(".confirmBtn");
const cancelBtn = favDialog.querySelector(".cancelBtn");
const form = document.querySelector(".form");

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
  const newBook = new Book(title.value, author.value, pages.value, read.value);
  myLibrary.push(newBook);
}

/* addBookToLibrary("Harry Potter1", "JK Rowling", 1000, true);
addBookToLibrary("Harry Potter2", "JK Rowling", 1000, true);
addBookToLibrary("Harry Potter3", "JK Rowling", 1000, false); */

/*displays each book on the page*/
const updateBooks = () => {
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
    readPara.textContent = `Read: ${
      book.read.toLowerCase() === "yes"
        ? "Yes"
        : book.read.toLowerCase() === "no"
        ? "No"
        : ""
    }`;
    bookDiv.appendChild(readPara);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    bookDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      bookDisplay.removeChild(bookDiv);
    });
  }
};

updateBooks();

showButton.addEventListener("click", () => {
  favDialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  favDialog.close();
  addBookToLibrary(title, author, pages, read);
  updateBooks();
});
