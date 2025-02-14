let catFact = document.querySelector('#randomCatFact'); // Hämta knappen för att få en slumpmässig kattfakta
let catFacts = document.querySelector('#randomCatFacts'); // Hämta knappen för att få flera slumpmässiga kattfakta
let randomFact = document.querySelector('#catFact'); // Hämta elementet där en slumpmässig kattfakta ska visas
let randomFacts = document.querySelector('#listOfCatFacts'); // Hämta listan där flera slumpmässiga kattfakta ska visas

// ---- Knapp för 'fact' ---- //
catFact.addEventListener('click', async () => {
    try {
        const url = 'https://catfact.ninja/fact'; // URL för att hämta en slumpmässig kattfakta
        const data = await fetch(url); // Skicka en förfrågan till API:et
        const response = await data.json(); // Konvertera svaret till JSON-format
    
        randomFact.textContent = response.fact; // Visa den hämtade kattfaktan i elementet
    
        // Slumpmässig RGB-färg som bakgrundsfärg
        const r = Math.floor(Math.random() * 156) + 100;
        const g = Math.floor(Math.random() * 156) + 100;
        const b = Math.floor(Math.random() * 156) + 100;
        randomFact.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // Sätt bakgrundsfärgen till en slumpmässig färg
        
    } catch (error) {
        alert('URL-link not working'); // Visa ett felmeddelande om förfrågan misslyckas
    }
});

// ---- Knapp för 'facts' ---- //
catFacts.addEventListener('click', async () => {
    try {
        const url = 'https://catfact.ninja/facts'; // URL för att hämta kattfakta
        const data = await fetch(url); // Skicka en förfrågan till API:et
        const response = await data.json(); // Konvertera svaret till JSON-format

        randomFacts.textContent = ''; // Rensa listan från tidigare fakta

        // Väljer slumpmässigt tre fakta från de hämtade fakta
        const selectedFacts = []; // Array-Lista för valda fakta
        while (selectedFacts.length < 3) {
            const randomIndex = Math.floor(Math.random() * response.data.length); // Slumpmässigt index
            const randomFact = response.data[randomIndex]; // Hämta fakta vid det slumpmässiga indexet
            if (!selectedFacts.includes(randomFact)) { // Kontrollera att faktan inte redan är vald
                selectedFacts.push(randomFact); // Lägg till faktan i listan över valda fakta
            }
        }

        // Lägg till de valda fakta i listan
        selectedFacts.forEach(info => {
            const post = document.createElement('li'); // Skapa ett nytt listobjekt
            post.textContent = info.fact; // Sätt texten till kattfaktan
            randomFacts.appendChild(post); // Lägg till listobjektet i listan
        });

        // Slumpmässig RGB-färg som bakgrundsfärg
        const r = Math.floor(Math.random() * 156) + 100;
        const g = Math.floor(Math.random() * 156) + 100;
        const b = Math.floor(Math.random() * 156) + 100;
        randomFacts.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // Sätt bakgrundsfärgen till en slumpmässig färg
    } catch (error) {
        alert('URL-link not working'); // Visa ett felmeddelande om förfrågan misslyckas
    }
});