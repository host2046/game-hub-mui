import {
  Box,
  Button,
  CircularProgress,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import useGenre from "../Hooks/useGenre";
import useGameQueryStore from "../../store/store";

const GenreList = () => {
  const selecletedGenreId = useGameQueryStore((s) => s.gamequery.genreId);
  const onSelectedGenre = useGameQueryStore((s) => s.setGenreId);
  const { data: genres, error, isLoading } = useGenre();
  if (error) return null;
  if (isLoading) return <CircularProgress />;
  return (
    <Grid item xs={12}>
      <Typography pl={2} py={3} color="white" variant="h5" fontWeight="bold">
        Genres
      </Typography>

      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id}>
            <img
              src={genre.image_background}
              alt={genre.name}
              style={{
                width: "32px",
                height: "32px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <Button
              onClick={() => onSelectedGenre(genre.id)}
              sx={{
                color: "white",
                textAlign: "left",
                ":hover": { fontWeight: "bold" },
              }}
              size={genre.id === selecletedGenreId ? "large" : "medium"}
            >
              {genre.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default GenreList;
