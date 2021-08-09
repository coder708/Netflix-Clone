import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">

      <Nav />
     <Banner />
     <Row isLargeRow={true} title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchTopRated}/>
    </div>
  );
}

export default App;
