const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "ebf6b563a2f76a0c355d5c4bedacd078";
let currentPage = 1;
let selectedGenre = null;
const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};
function getGenreNames(genreIds) {
  return genreIds.map((id) => genreMap[id]);
}
document.addEventListener("DOMContentLoaded", function () {
  populateGenreDropdown();
});
function populateGenreDropdown() {
  const genreDropdown = document.getElementById("genre-select");
  const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];
  genres.forEach((genre) => {
    genreDropdown.innerHTML += `<option value="${genre.id}">${genre.name}</option>`;
  });
}
function loadMovies() {
  selectedGenre = document.getElementById("genre-select").value;
  if (!selectedGenre) {
    alert("Please select a genre.");
    return;
  }
  const movieListContainer = document.getElementById("movieListContainer");
  movieListContainer.innerHTML = "";
  fetch(
    `${apiUrl}/discover/movie?with_genres=${selectedGenre}&api_key=${apiKey}&page=${currentPage}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (data.results.length === 0) {
        alert("No movies found for the selected genre.");
        return;
      }
      data.results.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("card");
        movieCard.innerHTML = ` <div class="row"> <div class="col-md-3"> <img src="https://image.tmdb.org/t/p/w500${
          movie.poster_path
        }" class="card-img-top" alt="Movie Image"> </div> <div class="col-md-9"> <div class="card-body"> <h5 class="card-title">Title: ${
          movie.title
        }</h5> <p class="card-subtitle mb-2"> <strong>Genre: ${getGenreNames(
          movie.genre_ids
        ).join(", ")}</strong><br> <strong>Rating: ${
          movie.vote_average
        }</strong><br> <strong>Plot: ${
          movie.overview
        }</strong><br> </p> <button class="btn" onclick="addToWishlist('${
          movie.title
        }', '${getGenreNames(movie.genre_ids).join(", ")}', '${
          movie.poster_path
        }')">Add</button> </div> </div> </div> `;
        movieListContainer.appendChild(movieCard);
      });
    })
    .catch((error) => {
      console.error("Error:", error.message);
      alert("Error: " + error.message);
    });
}
document.getElementById("loadMoreBtn").addEventListener("click", function () {
  currentPage++;
  loadMovies();
});
document.getElementById("genre-select").addEventListener("change", function () {
  currentPage = 1;
  loadMovies();
});
window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const name = urlParams.get("name");
  if (name) {
    document.getElementById("nameDisplay").textContent = `${name}`;
  }
};
function redirectToPage(pageURL) {
  const name = document.getElementById("nameDisplay").textContent;
  if (name) {
    window.location.href = `${pageURL}?name=${encodeURIComponent(name)}`;
  } else {
    window.location.href = pageURL;
  }
}
document.getElementById("homelink").addEventListener("click", function (event) {
  event.preventDefault();
  redirectToPage("home.html");
});
document
  .getElementById("genrelink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    redirectToPage("genre.html");
  });
document.getElementById("filmlink").addEventListener("click", function (event) {
  event.preventDefault();
  redirectToPage("film.html");
});
document
  .getElementById("aboutuslink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    redirectToPage("aboutus.html");
  });
document
  .getElementById("watchlistlink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    redirectToPage("watchlist.html");
  });
function addToWishlist(title, genre, posterPath) {
  const name = document.getElementById("nameDisplay").textContent;
  if (!name) {
    alert("Please provide a name.");
    return;
  }
  const movieData = {
    title: title,
    genre: genre,
    image: `https://image.tmdb.org/t/p/w500${posterPath}`,
    userName: name,
  };
}
