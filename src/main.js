import LibraryModel from './model/model.js';
import LibraryPresenter from './presenter/presenter.js';
import StatisticsView from './views/statisticsView.js';
import AddBookView from './views/add-bookView.js';
import FiltersView from './views/filtersView.js';
import BooksView from './views/booksView.js';

document.addEventListener('DOMContentLoaded', async () => {
    const root = document.querySelector('body');

    const statisticsView = new StatisticsView();
    const addBookView = new AddBookView();
    const filtersView = new FiltersView();
    const booksView = new BooksView();

    root.append(
        statisticsView.element,
        addBookView.element,
        filtersView.element,
        booksView.element,
    );

    const model = new LibraryModel();
    const presenter = new LibraryPresenter(model, {
        statisticsView,
        addBookView,
        filtersView,
        booksView,
    });

    presenter.setupEventListeners();
    await presenter.init();
});

