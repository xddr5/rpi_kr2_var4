class StatisticsView {
    constructor() {
        this.element = this.createElement();
    }

    createElement() {
        const section = document.createElement('section');
        section.id = 'statistics-view';
        section.innerHTML = `
            <h2>Статистика</h2>
            <div class="stats-block">
                <p>Всего книг: <span id="total-books">0</span></p>
            </div>
        `;
        return section;
    }

    updateStatistics(totalBooks) {
        this.element.querySelector('#total-books').textContent = totalBooks;
    }
}

export default StatisticsView;
