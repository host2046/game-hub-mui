import { useParams } from "react-router-dom";
import useGames from "../Hooks/useGames";
import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import ExpandAbleText from "../UI/ExpandeAbleText";
import DefinitionItems from "../DefinitionItems";
import CriticScore from "../Main/CriticScore";
import GameAtribute from "../GameAtribute";
import GameTrailer from "../UI/GameTrailer";
import GameScreens from "../UI/GameScreens";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGames(slug!);
  if (error || !game) return null;
  if (isLoading) return <CircularProgress />;
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        columns={{ md: 12 }}
      >
        <Grid item xs={6}>
          <Grid item xs={12}>
            <Typography my={2} variant="h3" fontWeight="bold" color="white">
              {game.name}
            </Typography>
            <ExpandAbleText>{game.description_raw}</ExpandAbleText>
          </Grid>

          <GameAtribute game={game} />
        </Grid>
        <Grid item xs={6}>
          <GameTrailer gameId={game.id} />

          <GameScreens gameId={game.id} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GameDetailPage;
