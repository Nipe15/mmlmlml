export function createMainContent() {
    const main = document.querySelector('main');

    // Tilføj en kort beskrivelse af JavaScript-moduler
    const description = document.createElement('p');
    description.textContent = "Et JavaScript-modul er en genanvendelig del af kode, der kan eksportere funktioner, objekter eller værdier til brug i andre moduler eller filer. Det hjælper med at organisere kode bedre og muliggør deling af logik på tværs af applikationen.";

    // Tilføj YouTube videoen som et iframe element
    const video = document.createElement('iframe');
    video.src = 'https://www.youtube.com/embed/qgRUr-YUk1Q?si=Z3ePgvhLH_cekl-N';

    // Tilføj beskrivelsen og videoen til main elementet
    main.appendChild(description);
    main.appendChild(video);
}