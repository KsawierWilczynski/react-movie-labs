import PageTemplate from '../components/templateMovieListPage';
import { getNowPlaying } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner'



const NowPlayingMoviesPage = () => {
  const { data, error, isPending, isError  } = useQuery({
      queryKey: ['now-playing'],
      queryFn: getNowPlaying,
    })

    if (isPending) {
        return <Spinner />
      }

      if (isError) {
        return <h1>{error.message}</h1>
      }

      const movies = data;

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