import { Stack } from "@mui/material";

import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";
import aliI from "../../assets/ali.png";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="row" spacing={4} p="10px">
      <Stack className="logo" onClick={() => navigate("/")}>
        RAWG
      </Stack>
      <SearchInput />
      <img className="image" src={aliI} />
    </Stack>
  );
};

export default Navbar;
