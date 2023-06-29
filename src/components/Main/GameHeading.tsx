import { Typography } from "@mui/material";

import useGenre from "../Hooks/useGenre";
import usePlatform from "../Hooks/usePlatform";
import usePlat from "../Hooks/usePlat";
import useGenres from "../Hooks/useGenres";
import useGameQueryStore from "../../store/store";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gamequery);
  const platform = usePlat(gameQuery.platformId);
  const genre = useGenres(gameQuery.genreId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Typography py="20px" color="white" fontWeight="bold" variant="h3">
      {heading}
    </Typography>
  );
};

export default GameHeading;
