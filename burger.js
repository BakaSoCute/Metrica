const BURGER_OPENED_CLASSNAME = 'burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';
const BODY_FIXED_CLASSNAME_2 = 'body_fixed_2';
const HTML_FIXED_CLASSNAME_2 = 'html_fixed';

const htmlNode2 = document.querySelector("html")
const bodyNode2 = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger__content')

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode2.classList.toggle(BODY_FIXED_CLASSNAME_2);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
    htmlNode2.classList.toggle(HTML_FIXED_CLASSNAME_2)
}
