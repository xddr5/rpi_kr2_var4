class AddBookView {
    constructor(onAddBook) {
        this.element = this.createElement();
        this.onAddBook = onAddBook;
        this.setupEventListeners();
    }

    createElement() {
        const section = document.createElement('section');
        section.id = 'add-book-view';
        section.innerHTML = `
            <h2>Добавление книги</h2>
            <form id="book-form">
                <input type="text" id="title" placeholder="Название книги">
                <input type="text" id="author" placeholder="Автор">
                <input type="number" id="year" placeholder="Год издания" min="1000" max="2024">
                <select id="genre">
                    <option value="">Выберите жанр</option>
                    <option value="Художественная литература">Художественная литература</option>
                    <option value="Научная литература">Научная литература</option>
                    <option value="Историческая литература">Историческая литература</option>
                    <option value="Программирование">Программирование</option>
                </select>
                <select id="status">
                    <option value="">Статус книги</option>
                    <option value="Доступна">Доступна</option>
                    <option value="Выдана">Выдана</option>
                    <option value="Зарезервирована">Зарезервирована</option>
                </select>
                <button type="submit">Добавить книгу</button>
            </form>
        `;
        return section;
    }

    setupEventListeners() {
        this.element.querySelector('#book-form').addEventListener('submit', (event) => {
            event.preventDefault();
            const book = {
                title: this.element.querySelector('#title').value,
                author: this.element.querySelector('#author').value,
                year: parseInt(this.element.querySelector('#year').value),
                genre: this.element.querySelector('#genre').value,
                status: this.element.querySelector('#status').value,
            };
            if (this.onAddBook) {
                this.onAddBook(book);
            } else {
                console.error('onAddBook function is not defined.');
            }
        });
    }
}

export default AddBookView;
