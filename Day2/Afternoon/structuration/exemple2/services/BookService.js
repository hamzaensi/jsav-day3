export class BookService {
    constructor() {
        this.books = []; // Liste des livres
    }

    addBook(book) {
        this.books.push(book);
    }

    getBooks() {
        return this.books;
    }

    deleteBook(id) {
        this.books = this.books.filter(book => book.id !== id);
    }
}
