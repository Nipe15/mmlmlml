export function createNav() {
    const nav = document.querySelector('nav');  // Find nav-elementet i HTML

    // Opret ul element
    const ul = document.createElement('ul');

    // Opret li element og a element med link til MDN
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = 'MDN - JavaScript Modules';
    a.href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules';
    a.target = '_blank';  // Åbner linket i et nyt vindue

    // Tilføj linket til li og derefter til ul
    li.appendChild(a);
    ul.appendChild(li);

    // Tilføj ul til nav
    nav.appendChild(ul);
}