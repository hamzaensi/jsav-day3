import { Book } from './models/Book.js';
import { BookService } from './services/BookService.js';
import { createBookElement } from './utils/domUtils.js';

const bookService = new BookService();
const bookList = document.getElementById('book-list');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addButton = document.getElementById('add-book');

function renderBooks() {
    bookList.innerHTML = ''; // Vider la liste
    const books = bookService.getBooks();
    books.forEach(book => {
        const bookElement = createBookElement(book, handleDeleteBook);
        bookList.appendChild(bookElement);
    });
}

function handleAddBook() {
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    if (title && author) {
        const newBook = new Book(title, author);
        bookService.addBook(newBook);
        renderBooks();
    }
    titleInput.value = '';
    authorInput.value = '';
}

function handleDeleteBook(bookId) {
    bookService.deleteBook(bookId);
    renderBooks();
}

addButton.addEventListener('click', handleAddBook);
