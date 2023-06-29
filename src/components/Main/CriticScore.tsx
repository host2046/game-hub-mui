import { Badge, Box } from "@mui/material";
import { red } from "@mui/material/colors";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Box ml="10px">
      <Badge color="success" badgeContent={score} />;
    </Box>
  );
};

export default CriticScore;
