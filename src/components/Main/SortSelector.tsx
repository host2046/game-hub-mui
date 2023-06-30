import { Button, Menu, MenuItem } from "@mui/material";
import { BsChevronDown } from "react-icons/bs";
import React, { useState } from "react";
import useGameQueryStore from "../../store/store";

const SortSelector = () => {
  const selectOrder = useGameQueryStore((s) => s.gamequery.sortOrder);
  const onSelectedOrder = useGameQueryStore((s) => s.setSortOrder);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const sortOredering = [
    { value: "", label: "Relevance" },
    { value: "-aded", label: "Date aded" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Papularity" },
    { value: "-rating", label: "Avarage rating" },
  ];
  const currentSortOrder = sortOredering.find(
    (order) => order.value === selectOrder
  );

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
        Order bY: {currentSortOrder?.label || " Relevance"}
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
        {sortOredering.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => {
              setAnchorEl(null);
              onSelectedOrder(order.value);
            }}
          >
            {order.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default SortSelector;
