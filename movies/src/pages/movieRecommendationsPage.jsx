import PageTemplate from '../components/templateMovieListPage';
import { getMovieRecommendations } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner'
import { useParams } from 'react-router';


const MovieRecommendationsPage = (props) => {
  const { id } = useParams();
  const { data, error, isPending, isError  } = useQuery({
          queryKey: ['recommendations', { id: id }],
          queryFn: () => getMovieRecommendations({ id: id })
        })

        if (isPending) {
            return <Spinner />
          }

          if (isError) {
            return <h1>{error.message}</h1>
          }

          console.log(data);

          const movies = data.results;

  return (
    <PageTemplate
      title={`Recommended Movies`}
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />;
      }}
    />
  );
};
export default MovieRecommendationsPage;