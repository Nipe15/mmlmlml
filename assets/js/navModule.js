import { updateMainText } from './mainModule.js';

export function createNav() {
    const nav = document.querySelector('nav');

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Indtast tekst';

    const button = document.createElement('button');
    button.textContent = 'Send';

    button.addEventListener('click', () => {
        const inputValue = input.value;
        updateMainText(inputValue);  
    });

    nav.appendChild(input);
    nav.appendChild(button);
}