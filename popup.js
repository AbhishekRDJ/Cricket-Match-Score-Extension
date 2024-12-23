document.addEventListener('DOMContentLoaded', () => {
    const apiKey = "59786363-10da-4696-b1bd-35aac8e77644";
    const apiURL = `https://api.cricapi.com/v1/matches?apikey=${apiKey}&offset=0`;

    const searchMatches = async () => {
        const searchInput = document.getElementById('searchInput').value.trim();
        if (!searchInput) {
            alert("Please enter a search term.");
            return;
        }

        try {
            const response = await fetch(apiURL);
            const data = await response.json();

            const results = data.data.filter(match =>
                match.name.toLowerCase().includes(searchInput.toLowerCase())
            );


            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = "";






            if (results.length > 0) {
                results.forEach(match => {
                    const matchElement = document.createElement('div');
                    matchElement.classList.add('match-item');

                    // Use createElement to safely add elements
                    const nameElement = document.createElement('h3');
                    nameElement.textContent = match.name;

                    const statusElement = document.createElement('p');
                    statusElement.innerHTML = `<strong>Status:</strong> ${match.status}`;

                    const venueElement = document.createElement('p');
                    venueElement.innerHTML = `<strong>Venue:</strong> ${match.venue}`;

                    const dateElement = document.createElement('p');
                    dateElement.innerHTML = `<strong>Date:</strong> ${match.date}`;

                    matchElement.appendChild(nameElement);
                    matchElement.appendChild(statusElement);
                    matchElement.appendChild(venueElement);
                    matchElement.appendChild(dateElement);



                    resultsContainer.appendChild(matchElement);
                });

            } else {
                resultsContainer.innerHTML = "<p>No matches found.</p>";
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    document.getElementById('search-button').addEventListener('click', searchMatches);

    document.getElementById('searchInput').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchMatches();
        }
    });
});
