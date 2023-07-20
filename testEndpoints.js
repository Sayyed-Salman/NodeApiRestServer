const axios = require('axios');

const baseUrl = 'http://localhost:3000/api/Movies';

async function getAllMovies() {
  try {
    const response = await axios.get(baseUrl);
    console.log('GET /api/Movies');
    console.log(response.data);
  } catch (error) {
    console.error('Error retrieving all Movies:', error.message);
  }
}

async function createMovie(MovieData) {
  try {
    const response = await axios.post(baseUrl, MovieData);
    console.log('POST /api/Movies');
    console.log(response.data);
  } catch (error) {
    console.error('Error creating a Movie:', error.message);
  }
}

async function updateMovie(MovieData) {
  try {
    const response = await axios.put(`${baseUrl}/${await getMovieId()}`, MovieData);
    console.log('PUT /api/Movies/:id');
    console.log(response.data);
  } catch (error) {
    console.error('Error updating a Movie:', error.message);
  }
}

async function deleteMovie() {
  try {
    const response = await axios.delete(`${baseUrl}/${await getMovieId()}`);
    console.log('DELETE /api/Movies/:id');
    console.log(response.data);
  } catch (error) {
    console.error('Error deleting a Movie:', error.message);
  }
}

// Get a movie id from the database to use for updating and deleting
function getMovieId() {
  return axios.get(baseUrl).then((response) => {
    return response.data[0]._id;
  });
}


const newMovieData = {
  name: "New Movie",
  img: "https://example.com/Movie-image.jpg",
  summary: "This is a new Movie summary.",
};


// Make the API requests
getAllMovies();
createMovie(newMovieData);
updateMovie(newMovieData);
deleteMovie();
