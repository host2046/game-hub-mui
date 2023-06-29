import { Box, Grid, Stack } from "@mui/material";
import GameHeading from "../Main/GameHeading";
import PlatformSelector from "../Main/PlatformSelector";
import SortSelector from "../Main/SortSelector";
import GameGrid from "../Main/GameGrid";
import GenreList from "../Sidebar/GenreList";

const HomePage = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        columns={{ md: 12 }}
        rowSpacing={1}
        columnSpacing={{ xs: 1, md: 2 }}
      >
        <Grid item xs={10}>
          <GameHeading />
          <Stack direction="row" spacing={5} mb={1}>
            <PlatformSelector />
            <SortSelector />
          </Stack>
          <GameGrid />
        </Grid>
        <Grid item xs={2}>
          <GenreList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
