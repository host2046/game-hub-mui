import { Box, Grid, Stack } from "@mui/material";
import useScreenShot from "../Hooks/useScreenShot";
interface Props {
  gameId: number;
}

const GameScreens = ({ gameId }: Props) => {
  const { data: game } = useScreenShot(gameId);
  return (
    <Grid item xs={12} container>
      {game?.results.map((game) => (
        <Stack my={1} key={game.id}>
          <img
            style={{ width: "100%", objectFit: "cover" }}
            src={game.image}
            alt="as"
          />
        </Stack>
      ))}
    </Grid>
  );
};

export default GameScreens;
