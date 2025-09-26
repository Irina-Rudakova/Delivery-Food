const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay')
const cartBtn = document.querySelector('#cart-button')

const openModal = () => {
    modal.classList.add('open')
}

const closeModal = () => {
    modal.classList.remove('open')
}

cartBtn.addEventListener('click', () => {
    openModal()
})


modal.addEventListener('click', (event) => {
    console.log();
    if (
        event.target.classList.contains('cart-modal__overlay') ||
        event.target.closest('.cart-modal__header--close')
    ) {
        closeModal()
    }
  });
};

const restsFunc = () => {
    const container = document.querySelector('#rests-container')

    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            prise: 900,
            type: 'Пицца',
            Image: 'Pizza+.jpg'
        },

        {
            id: 1,
            title: 'Тануки',
            time: 50,
            rating: 4.5,
            prise: 900,
            type: 'Пицца',
            Image: 'Tanuki.jpg'
        },

        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            prise: 900,
            type: 'Пицца',
            Image: 'FoodBand.jpg'
        },
    
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            prise: 900,
            type: 'Пицца',
            Image: 'Gadina-pizza.jpg'
        },

        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            prise: 900,
            type: 'Пицца',
            Image: 'Tochka-edy.jpg'
        },

        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            prise: 900,
            type: 'Пицца',
            Image: 'PizzaBurger.jpg'
        }
    ]
    
    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>'
    }
    
    const renderRests = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a href="./goods.html?id=${card.id}" class="products-card">
                            <div class="products-card__image">
                                <img src="./images/rests/${card.Image}" alt="${card.Image}">
                            </div>
                            <div class="products-card__description">
                                <div class="products-card__description-row">
                                    <h4 class="products-card__description--title">${card.title}</h4>
                                    <div class="products-card__description--badge">${card.time} мин</div>
                                </div>

                                <div class="products-card__description-row">
                                    <div class="products-card__description-info">
                                        <div class="products-card__description-info--raiting">
                                            <img src="./images/icons/star.svg" alt="star">
                                            ${card.rating}
                                        </div>
                                        <div class="products-card__description-info--price">
                                            От ${card.price} ₽
                                        </div>
                                        <div class="products-card__description-info--group">
                                            ${card.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                `)
            
        });
    }

    if (container) {
        loading()

        setTimeout(() => {
        renderRests(restArray)
    }, 1000)
    }
    
}

modalFunc()
restsFunc()