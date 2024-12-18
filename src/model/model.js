import { books as mockBooks } from '../mock/books.js';

class LibraryModel {
    constructor() {
        this.books = mockBooks;
    }

    async fetchBooks() {
        return this.books;
    }

    async addBook(book) {
        const newBook = { id: this.books.length + 1, ...book };
        this.books.push(newBook);
        return newBook;
    }

    async deleteBook(bookId) {
        this.books = this.books.filter(book => book.id !== parseInt(bookId));
    }

    filterBooks(filter) {
        return this.books.filter((book) => {
            if (filter.genre && book.genre !== filter.genre) return false;
            if (filter.search && 
                !(`${book.title} ${book.author}`.toLowerCase().includes(filter.search.toLowerCase()))) return false;
            return true;
        });
    }
}

export default LibraryModel;

