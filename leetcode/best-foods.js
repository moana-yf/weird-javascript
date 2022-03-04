const rootElement = document.querySelector('.fooods');

const foodData = [
    {
        id: 1,
        image: '🌮',
        name: 'taco',
    },
    {
        id: 2,
        image: '🌮🌮',
        name: 'taco2',
    },
    {
        id: 3,
        image: '🌮🌮🌮',
        name: 'taco3',
    },
    {
        id: 4,
        image: '🌮🌮🌮🌮',
        name: 'taco3 ',
    },
]

class Foods {
    constructor(el, foodData) {
        this._root = el;
        this._data = foodData;
    }

    renderList() {
        this._root.addEventListener('click', event => {
            const { target } = event;
            target.remove();
        });

        const fragment = document.createDocumentFragment();

        this._data.forEach(i => {
            fragment.appendChild(this.createFoodItem(i));
        });

        this._root.appendChild(fragment);
    }

    createFoodItem(item) {
        const itemEl = document.createElement('div');
        itemEl.innerText = item.image;
        itemEl.classList.add(item.name);

        return itemEl;
    }
}

const foods = new Foods(rootElement, foodData);

foods.renderList();