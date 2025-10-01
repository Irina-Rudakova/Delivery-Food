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
            price: 900,
            type: 'Пицца',
            Image: 'Pizza+.jpg'
        },

        {
            id: 1,
            title: 'Тануки',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            Image: 'Tanuki.jpg'
        },

        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            Image: 'FoodBand.jpg'
        },
    
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            Image: 'Gadina-pizza.jpg'
        },

        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            Image: 'Tochka-edy.jpg'
        },

        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
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
                <a href="./goods.html?id=${card.id}" class="w-[calc(33.33%-16px)] rounded-[7px] shadow-[0_4px_12px_0_rgba(0,0,0,0.5)] bg-[#fff] overflow-hidden no-underline">
                            <div class="products-card__image">
                                <img src="./images/rests/${card.Image}" alt="${card.Image}">
                            </div>
                            <div class="pt-5 px-6 pb-[34px]">
                                <div class="flex items-center justify-between mb-3">
                                    <h4 class="font-bold text-2xl leading-8 text-[#000]">${card.title}</h4>
                                    <div class="products-card__description--badge">${card.time} мин</div>
                                </div>

                                <div class="flex items-center justify-between not-last:mb-2.5">
                                    <div class="flex items-center justify-start flex-wrap gap-y-[25px] gap-x-[25px]">
                                        <div class="flex gap-x-[5px] font-bold text-lg leading-8 text-[#ffc107]">
                                            <img class="class="w-full" src="./images/icons/star.svg" alt="star">
                                            ${card.rating}
                                        </div>
                                        <div class="font-normal text-lg leading-8 text-[#8c8c8c]">
                                            От ${card.price} ₽
                                        </div>
                                        <div class="font-normal text-lg leading-8 text-[#8c8c8c] relative before:content-[''] before:block before:w-[5px] before:h-[5px] before:rounded-[50%] before:bg-[#8c8c8c] before:absolute before:left-[-14px] before:top-[14px]">
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