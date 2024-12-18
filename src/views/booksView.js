class BooksView {
    constructor(onDeleteBook) {
        this.element = this.createElement();
        this.onDeleteBook = onDeleteBook; 
    }

    createElement() {
        const section = document.createElement('section');
        section.id = 'books-view';
        section.innerHTML = `
            <h2>Книги в библиотеке</h2>
            <div id="books-container"></div>
        `;
        return section;
    }

    render(books) {
        const container = this.element.querySelector('#books-container');
        container.innerHTML = books.map((book) => `
            <div class="book-item" data-id="${book.id}">
                <h3>${book.title}</h3>
                <p>Автор: ${book.author}</p>
                <p>Год: ${book.year}</p>
                <p>Жанр: ${book.genre}</p>
                <p>Статус: ${book.status}</p>
                <button class="delete-button">Удалить</button>
            </div>
        `).join('');

        this.addDeleteButtonsEventListeners();
    }

    addDeleteButtonsEventListeners() {
        const deleteButtons = this.element.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const bookId = event.target.closest('.book-item').dataset.id;
                this.onDeleteBook(bookId);
            });
        });
    }
}

export default BooksView;
