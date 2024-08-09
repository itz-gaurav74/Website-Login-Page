const hamburger = document.querySelector('.hamburger-menu');
const lists = document.querySelector('.lists');

let rotate45 = () => {
    hamburger.classList.toggle('active');
    lists.classList.toggle('active')
}

hamburger.addEventListener('click', ()=>{
    rotate45();
});


const listItem = document.querySelectorAll('.lists li');

let closeHamb = () =>{
    hamburger.classList.remove('active');
    lists.classList.remove('active');
}

listItem.forEach((ele) =>{
    lists.addEventListener('click',() => {
        closeHamb();
    })
});