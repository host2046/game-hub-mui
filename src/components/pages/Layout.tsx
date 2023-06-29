import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box>
      <Navbar />
      <Box p="30px">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
