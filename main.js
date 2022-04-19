const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const getProducts = $$('.home-product-item__hide')
const getCategoryItem = $$('.category-item')

getCategoryItem.forEach((item,index) => {
    const getProduct = getProducts[index]

    item.onclick = function() {
        $('.category-item.category-item--active').classList.remove('category-item--active')
        $('.home-product-item__hide.home-product-item__active').classList.remove('home-product-item__active')
        this.classList.add('category-item--active')
        getProduct.classList.add('home-product-item__active')
    }
})


const register = document.getElementById('register')
const formRegister = document.getElementById('form-register')
const modalBody = $$('.modal__body')
const modalClose = $$('.modal-close')

// Form Register

register.onclick = () => {
    formRegister.classList.remove('modal__hide')
}

formRegister.onclick = () => {
    formRegister.classList.add('modal__hide')
}

// Form Login

const login = document.getElementById('login')
const formLogin = document.getElementById('form-login')

login.onclick = () => {
    formLogin.classList.remove('modal__hide')
}

formLogin.onclick = () => {
    formLogin.classList.add('modal__hide')
}

// Button close

modalClose.forEach(element => {
    element.onclick = () => {
        formRegister.classList.add('modal__hide')
        formLogin.classList.add('modal__hide')
    }
})

modalBody.forEach(element => {
    element.onclick = (e) => {
        e.stopPropagation()
    }
})