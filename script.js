const nav = document.querySelector('.nav-container');
const links = document.querySelectorAll ('.nav-link');
const highlight = document.querySelector('.highlight');

function moveHighlight(el) {
    highlight.style.width = `${el.offsetWidth}px`;
    highlight.style.left = `${el.offsetLeft}px`;
}

const activeLink = document.querySelector('.nav-link.active');
if (activeLink) moveHighlight(activeLink);

links.forEach(link => {

    link.addEventListener('mouseenter', () => moveHighlight(link));

    nav.addEventListener('mouseleave', () => {
        if (activeLink) moveHighlight(activeLink);
    });
});