import { Button, Grid, Stack, Typography } from "@mui/material";
import useGame from "../Hooks/use-game";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";

import { Fragment } from "react";

const GameGrid = () => {
  const {
    data: games,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGame();
  const skeleton = [1, 2, 4, 5, 6, 7];
  if (error) return <Typography>{error.message}</Typography>;

  return (
    <Grid item container>
      <Grid item xs={12}>
        <Stack
          mt="20px"
          direction="row"
          flexWrap="wrap"
          useFlexGap
          spacing={{ xs: 1, md: 3 }}
        >
          {isLoading && skeleton.map((s) => <LoadingSkeleton key={s} />)}
          {games?.pages.map((page, index) => (
            <Fragment key={index}>
              {page?.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </Fragment>
          ))}
        </Stack>
      </Grid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "loading..." : "Load more"}
        </Button>
      )}
    </Grid>
  );
};

export default GameGrid;
