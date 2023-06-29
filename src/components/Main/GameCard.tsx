import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Game } from "../Hooks/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card
      sx={{
        maxWidth: { md: "30%" },
        borderRadius: "20px",
        ":hover": {
          transform: "scale(1.08)",
          transition: "transform .15s ease-in",
        },
      }}
    >
      <CardMedia component="img" image={game.background_image} alt="image" />
      <CardContent>
        <Stack direction="row" justifyContent="space-between" my="10px">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Stack>
        <Typography variant="h5">
          <Link
            style={{ textDecoration: "none", color: "#111" }}
            to={"/games/" + game.slug}
          >
            {game.name}
          </Link>
        </Typography>
        <Emoji rating={game.rating_top} />
      </CardContent>
    </Card>
  );
};

export default GameCard;
