const hamburger = document.querySelector('.hamburger-menu');
const listItem = document.querySelectorAll('.lists li');
const showPopup = document.querySelector('.login-btn');
const lists = document.querySelector('.lists');
const formPopup = document.querySelector('.form-popup');
const closeBtn = formPopup.querySelector('#icon-close');
const signupLoginLinks =  formPopup.querySelectorAll('.link a');

// Working Of Open Hamburger
let rotate45 = () => {
    hamburger.classList.toggle('active');
    lists.classList.toggle('active')
}

// Open Hamburger
hamburger.addEventListener('click', ()=>{
    rotate45();
});

// Working Of Close Hamburger
let closeHamb = () =>{
    hamburger.classList.remove('active');
    lists.classList.remove('active');
}

// Close Hamburger
listItem.forEach((ele) =>{
    lists.addEventListener('click',() => {
        closeHamb();
    })
});


// Open PopUp Window
showPopup.addEventListener('click', () => {
    document.body.classList.toggle('show-popup')
});

// Close PopUp Window
closeBtn.addEventListener('click', () => 
    showPopup.click());

    // Switch PopUp Window
    signupLoginLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']('show-signup')
        })
    })
