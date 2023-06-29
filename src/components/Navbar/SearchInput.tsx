import { Box, Input, InputAdornment } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { FormEvent } from "react";
import { useRef } from "react";
import useGameQueryStore from "../../store/store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const onSearch = useGameQueryStore((s) => s.setSearch);
  const ref = useRef<HTMLInputElement>(null);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredInput = ref.current!.value;
    onSearch(enteredInput);
    navigate("/");
  };
  return (
    <Box pt="5px" width="80%" component="form" onSubmit={submitHandler}>
      <Input
        inputComponent="input"
        fullWidth
        inputRef={ref}
        placeholder="Search Game..."
        sx={{
          borderRadius: "50px",
          color: "#ccc",
          paddingLeft: "5px",
          bgcolor: "#212121",

          ":hover": { bgcolor: "#424242" },
        }}
        startAdornment={
          <InputAdornment position="start">
            <BsSearch color="#ccc" />
          </InputAdornment>
        }
      />
    </Box>
  );
};

export default SearchInput;
