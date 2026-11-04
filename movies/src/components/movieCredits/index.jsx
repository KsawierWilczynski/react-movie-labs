import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner'
import { getMovieCredits } from "../../api/tmdb-api";

export default function MovieCredits({ movie }) {
   const { data, error, isPending, isError } = useQuery({
    queryKey: ['credits', { id: movie.id }],
    queryFn: getMovieCredits,
  });
  
  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const credits = data.cast;


  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="credits table">
        <TableHead>
          <TableRow>
            <TableCell >Actor Name</TableCell>
            <TableCell>Character</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {credits.map((r) => (
            <TableRow id={r.id}>
                <TableCell>{r.name}</TableCell>
                <TableCell>{r.character}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
