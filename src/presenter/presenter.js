class LibraryPresenter {
    constructor(model, views) {
        this.model = model;
        this.views = views;
        this.setupEventListeners();
    }

    async init() {
        await this.loadBooks();
    }

    async loadBooks() {
        const books = await this.model.fetchBooks();
        this.views.booksView.render(books);
        this.views.statisticsView.updateStatistics(books.length);
    }

    async handleAddBook(book) {
        await this.model.addBook(book);
        await this.loadBooks();
    }

    async handleDeleteBook(bookId) {
        await this.model.deleteBook(bookId);
        await this.loadBooks();
    }

    setupEventListeners() {
        this.views.booksView.onDeleteBook = this.handleDeleteBook.bind(this);
        this.views.addBookView.onAddBook = this.handleAddBook.bind(this);
    }
}

export default LibraryPresenter;
