import PageTemplate from '../components/templateMovieListPage';
import { getTopRatedMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner'



const TopRatedMoviesPage = () => {
  const { data, error, isPending, isError  } = useQuery({
        queryKey: ['top-rated'],
        queryFn: getTopRatedMovies,
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
      title='Top Rated Movies'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />;
      }}
    />
  );
};
export default TopRatedMoviesPage;