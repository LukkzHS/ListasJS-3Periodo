window.addEventListener('load', () => {
    const apiKey = '843e4b59da758cc12f1ba5ff1276234f';
    const apiUrlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`;

    fetch(apiUrlGenres)
        .then(response => response.json())
        .then(data => {
            const genres = data.genres.reduce((acc, genre) => {
                if (genre.name) {
                    acc[genre.id] = genre.name;
                }
                return acc;
            }, {});

            fetchPopularMovies(genres);
        })
        .catch(error => console.error('Erro ao obter os gêneros:', error));
});

function fetchPopularMovies(genres) {
    const apiKey = '843e4b59da758cc12f1ba5ff1276234f';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const movies = data.results.slice(0, 10);
            const moviesContainer = document.getElementById('movies-container');

            const movieElements = movies.map(movie => {
                const { title, poster_path, genre_ids, overview, release_date, vote_average } = movie;
                const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'placeholder.jpg';
                const genresNames = genre_ids.map(id => genres[id]).join(', ');
                const description = overview ? overview : 'Descrição não disponível na sua linguagem';

                return `
                    <div class="movie">
                        <img src="${imageUrl}" alt="${title}"> 
                        <div class="movie-info">
                            <h3>${title}</h3>
                            <p><b>Gêneros:</b> ${genresNames}</p>
                            <p><b>Data de Lançamento:</b> ${release_date}</p>
                            <p><b>Classificação:</b> ${vote_average.toFixed(1)}</p>
                            <p class="description"><b>Descrição:</b> ${description}</p>
                            <p class="read-more">Leia mais</p>
                        </div>
                    </div>
                `;
            });

            moviesContainer.innerHTML = movieElements.join('');

            document.querySelectorAll('.read-more').forEach(function(readMore) {
                const description = readMore.previousElementSibling;
                readMore.addEventListener('click', function() {
                    description.classList.toggle('expanded');
                    if (description.classList.contains('expanded')) {
                        readMore.textContent = 'Fechar';
                        description.style.maxHeight = 'none'; 
                    } else {
                        readMore.textContent = 'Leia mais';
                        description.style.maxHeight = '70px'; 
                    }
                });
            });
        })
        .catch(error => console.error('Erro ao obter os filmes:', error));
}

