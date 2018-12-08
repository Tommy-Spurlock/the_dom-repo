var movieObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977"
}

var titleContainer = document.querySelector("#title");
titleContainer.innerHTML = (movieObject.title)
var genreContainer = document.querySelector("#genre");
genreContainer.innerHTML = (movieObject.genre);
var releaseContainer = document.querySelector("#release-date");
releaseContainer.innerHTML = (movieObject.releaseDate)  

var movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    }, 
    {
      title: "The Grinch",
      rating: "G",
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    }
  ];


  var htmlString0 = `
    <h3 class="movie-title">${movieSchedule[0].title}</h3>
    <p class="movie-rating">${movieSchedule[0].rating}</p>
    <h5 class="movie-poster"><img src=${movieSchedule[0].poster} alt="Movie Image"/>
`;


var htmlString1 = `
    <h3 class="movie-title">${movieSchedule[1].title}</h3>
    <p class="movie-rating">${movieSchedule[1].rating}</p>
    <h5 class="movie-poster"><img src=${movieSchedule[1].poster} alt="Movie Image"/>
`;



var htmlString2 = `
    <h3 class="movie-title">${movieSchedule[2].title}</h3>
    <p class="movie-rating">${movieSchedule[2].rating}</p>
    <h5 class="movie-poster"><img src=${movieSchedule[2].poster} alt="Movie Image"/>
`;
var scheduleContainer = document.querySelector("#movie-schedule");
scheduleContainer.innerHTML = (htmlString0 + htmlString1 + htmlString2);