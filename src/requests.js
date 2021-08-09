const API_KEY = "5c1bcd1e975c210e8d7fdc5d8d03aded";

const requests={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_networks=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_networks=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_networks=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_networks=99`,
}

export default requests;