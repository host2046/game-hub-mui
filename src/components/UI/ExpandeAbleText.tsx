import { Button, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandAbleText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Typography>{children}</Typography>;
  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <>
      <Typography color="white">
        {summary}
        <Button
          variant="contained"
          size="small"
          sx={{
            fontWeight: "bold",
            bgcolor: "#cddc39",
            marginLeft: "5px",
            borderRadius: "20px",
            ":hover": { bgcolor: "#eeff41" },
          }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "show less" : "read More"}
        </Button>
      </Typography>
    </>
  );
};
export default ExpandAbleText;
