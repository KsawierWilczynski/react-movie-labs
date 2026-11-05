import { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getNowPlaying } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";



const NowPlayingMoviesPage = () => {
  const [movies, setMovies] = useState([]);

 useEffect(() => {
    getNowPlaying().then(movies => {
      setMovies(movies);
    });
  }, []);
  
  return (
    <PageTemplate
      title='Now Playing Movies'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />;
      }}
    />
  );
};
export default NowPlayingMoviesPage;