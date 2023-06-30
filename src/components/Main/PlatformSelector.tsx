import { Button, Menu, MenuItem } from "@mui/material";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import usePlatform from "../Hooks/usePlatform";

import usePlat from "../Hooks/usePlat";
import useGameQueryStore from "../../store/store";

const PlatformSelector = () => {
  const selectedPlatfromId = useGameQueryStore((s) => s.gamequery.platformId);
  const onSelectPlatform = useGameQueryStore((s) => s.setPlatfromId);
  const { data, error } = usePlatform();
  const selectplatform = usePlat(selectedPlatfromId);
  if (error) return null;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Button
        sx={{
          color: "#ccc",
          bgcolor: "#212121",
          ":hover": { bgcolor: "#424242", fontWeight: "bold" },
        }}
        variant="contained"
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<BsChevronDown />}
      >
        {selectplatform?.name || "Platforms"}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => {
              setAnchorEl(null);
              onSelectPlatform(platform.id);
            }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default PlatformSelector;
