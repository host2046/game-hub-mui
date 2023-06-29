import { Grid, Stack, Typography } from "@mui/material";
import { Game } from "./Hooks/Game";
import DefinitionItems from "./DefinitionItems";
import CriticScore from "./Main/CriticScore";

interface Props {
  game: Game;
}

const GameAtribute = ({ game }: Props) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <DefinitionItems term="Platforms">
          {game.parent_platforms.map(({ platform }) => (
            <Typography key={platform.id}>{platform.name}</Typography>
          ))}
        </DefinitionItems>
      </Grid>
      <Grid item xs={6}>
        <DefinitionItems term="MetaScore">
          <CriticScore score={game.metacritic} />
        </DefinitionItems>
      </Grid>
      <Grid item xs={6}>
        <DefinitionItems term="Genres">
          {game.genres.map((genre) => (
            <Typography key={genre.id}>{genre.name}</Typography>
          ))}
        </DefinitionItems>
      </Grid>
      <Grid item xs={6}>
        <DefinitionItems term="Publishers">
          {game.publishers?.map((p) => (
            <Typography key={p.id}>{p.name}</Typography>
          ))}
        </DefinitionItems>
      </Grid>
    </Grid>
  );
};

export default GameAtribute;
