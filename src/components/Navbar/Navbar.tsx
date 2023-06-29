import { Stack } from "@mui/material";

import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="row" spacing={4} p="10px">
      <Stack className="logo" onClick={() => navigate("/")}>
        RAWG
      </Stack>
      <SearchInput />
    </Stack>
  );
};

export default Navbar;
