const mainmenu = document.querySelector('.mainmenu');
const openmenu = document.querySelector('.openmenu');
const closemenu = document.querySelector('.closemenu');

// Toggle the mobile menu by adding/removing the `open` class
openmenu.addEventListener('click', () => {
    mainmenu.classList.add('open');
});

closemenu.addEventListener('click', () => {
    mainmenu.classList.remove('open');
});

// Close menu when a navigation link is clicked (mobile friendly)
mainmenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (mainmenu.classList.contains('open')) mainmenu.classList.remove('open');
    });
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


