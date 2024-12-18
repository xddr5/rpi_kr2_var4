class FiltersView {
    constructor(onFilterChange) {
        this.element = this.createElement();
        this.onFilterChange = onFilterChange;
        this.setupEventListeners();
    }

    createElement() {
        const section = document.createElement('section');
        section.id = 'filters-view';
        section.innerHTML = `
            <h2>Фильтры</h2>
            <select id="genre-filter">
                <option value="">Все жанры</option>
                <option value="Художественная литература">Художественная литература</option>
                <option value="Научная литература">Научная литература</option>
                <option value="Историческая литература">Историческая литература</option>
                <option value="Программирование">Программирование</option>
            </select>
            <input type="text" id="search-input" placeholder="Поиск по названию или автору">
        `;
        return section;
    }

    setupEventListeners() {
        this.element.querySelector('#genre-filter').addEventListener('change', (event) => {
            const genre = event.target.value;
            this.onFilterChange({ genre });
        });

        this.element.querySelector('#search-input').addEventListener('input', (event) => {
            const search = event.target.value;
            this.onFilterChange({ search });
        });
    }
}

export default FiltersView;
