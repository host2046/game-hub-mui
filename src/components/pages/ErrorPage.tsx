import { Box, Typography } from "@mui/material";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "#161616",
      }}
    >
      <Box
        sx={{ position: "absolute", top: "30%", left: "30%", color: "white" }}
      >
        <Typography variant="h1">Oops!</Typography>
        <Typography variant="h6">
          {isRouteErrorResponse(error)
            ? "this page does not exist, a wrong path."
            : "An unexpected error accured."}
        </Typography>
      </Box>
    </Box>
  );
};

export default ErrorPage;
