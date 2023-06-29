import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  term: string;
}

const DefinitionItems = ({ term, children }: Props) => {
  return (
    <Box my="20px">
      <Typography component="dt" variant="h5" color="grey.600">
        {term}
      </Typography>
      <dd style={{ color: "white" }}>{children}</dd>
    </Box>
  );
};

export default DefinitionItems;
