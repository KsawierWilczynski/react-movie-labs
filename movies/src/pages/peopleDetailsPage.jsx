import { useParams } from 'react-router';
import PageTemplate from "../components/templateMoviePage";
import { getPerson } from '../api/tmdb-api'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import PeopleDetails from "../components/peopleDetails/";

const PeoplePage = (props) => {
  const { id } = useParams();
    const { data: person, error, isPending, isError  } = useQuery({
    queryKey: ['person', {id: id}],
    queryFn: getPerson,
  })

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <>
      {person ? (
        <>

            <PeopleDetails people={person} />

        </>
      ) : (
        <p>Waiting for people details</p>
      )}
    </>
  );
};

export default PeoplePage;
