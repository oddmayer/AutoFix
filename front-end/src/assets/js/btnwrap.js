const btnwraper = document.getElementsById('navbar-toggler');

function toggleMenu(){
    const nav = document.getElementsById('navbar');
    nav.classList.toggle('active');
}

btnwraper.addEventListener('click', toggleMenu);