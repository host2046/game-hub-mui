import { Grid } from "@mui/material";
import useTrailer from "../Hooks/useTrailer";
interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error } = useTrailer(gameId);

  if (error) return null;
  const first = data?.results[0];
  return first ? (
    <Grid item xs={12}>
      <video
        style={{ width: "100%" }}
        src={first.data[480]}
        poster={first.preview}
        controls
      />
    </Grid>
  ) : null;
};

export default GameTrailer;
