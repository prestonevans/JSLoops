const nav = document.querySelector('nav');

for(let i = 0; i < 7; i++) {
    nav.innerHTML += `<a href="#">link ${i}</a>`;
}
const links = document.querySelectorAll('a');

for(let link of links) {
    link.classList.add('pretty')
}