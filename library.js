const bookDisplay = document.querySelector(".bookDisplay");
const showButton = document.querySelector(".showDialog");
const dialog = document.querySelector(".dialog");
const confirmBtn = dialog.querySelector(".confirmBtn");
const cancelBtn = dialog.querySelector(".cancelBtn");
const form = document.querySelector(".bookform");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

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
  this.toggleReadStatus = function () {
    this.read = this.read === "Yes" ? "No" : "Yes";
  };
}

/*stores books into myLibrary array*/
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title.value, author.value, pages.value, read.value);
  myLibrary.push(newBook);
}

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
      book.read.toLowerCase() === "yes" ? "Yes" : "No"
    }`;
    bookDiv.appendChild(readPara);

    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edBtn");
    editBtn.textContent = "Change Read Status";
    bookDiv.appendChild(editBtn);

    editBtn.addEventListener("click", () => {
      book.toggleReadStatus();
      readPara.textContent = `Read: ${book.read}`;
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delBtn");
    deleteBtn.textContent = "Delete Book";
    bookDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      bookDisplay.removeChild(bookDiv);
    });
  }
};

updateBooks();

showButton.addEventListener("click", () => {
  dialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
  addBookToLibrary(title, author, pages, read);
  updateBooks();
  emptyInputFields();
});

const emptyInputFields = () => {
  title.value = "";
  author.value = "";
  pages.value = "";
  read.value = "";
};
