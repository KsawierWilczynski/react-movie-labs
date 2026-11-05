import PageTemplate from '../components/templateMovieListPage';
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner'
import { getTrendingMovies } from "../api/tmdb-api";



const TrendingMoviesPage = () => {
  const { data, error, isPending, isError  } = useQuery({
          queryKey: ['trending'],
          queryFn: getTrendingMovies,
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
      title='Trending today'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />;
      }}
    />
  );
};
export default TrendingMoviesPage;