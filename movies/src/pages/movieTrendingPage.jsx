import { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getTrendingMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";



const TrendingMoviesPage = () => {
  const [movies, setMovies] = useState([]);

 useEffect(() => {
    getTrendingMovies('day').then(movies => {
      setMovies(movies);
    });
  }, []);
  
  return (
    <PageTemplate
      title='Trending today'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />;
      }}
    />
  );
};
export default TrendingMoviesPage;