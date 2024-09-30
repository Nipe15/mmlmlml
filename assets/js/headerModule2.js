export function createHeader() {
    const header = document.querySelector('header');
    const h1 = document.createElement('h1');
    h1.textContent = "Mine første moduler"; 
    header.appendChild(h1);
}