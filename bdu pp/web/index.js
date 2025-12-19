const mainmenu = document.querySelector('.mainmenu');
const openmenu = document.querySelector('.openmenu');
const closemenu = document.querySelector('.closemenu');

openmenu.addEventListener('click', () => {
    mainmenu.style.top = "0";
});

closemenu.addEventListener('click', () => {
    mainmenu.style.top = "-100%";
});
const buttons = document.querySelectorAll('.cbtn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const ingredients = button.nextElementSibling;

        if (ingredients.style.display === "block") {
            ingredients.style.display = "none";
        } else {
            ingredients.style.display = "block";
        }
    });
});
const orderForm = document.querySelector('.order-form');
const confirmBtn = orderForm.querySelector('button');

orderForm.addEventListener('submit', function (e) {
    e.preventDefault(); // stop page reload

    confirmBtn.textContent = "successfull";
    confirmBtn.style.backgroundColor = "black";
    confirmBtn.disabled = true;
});


