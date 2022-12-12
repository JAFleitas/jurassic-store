import { SearchOutlined } from "@mui/icons-material";
import {
  IconButton,
  Input,
  InputAdornment,
  Box,
  Typography,
} from "@mui/material";

import { useRouter } from "next/router";
import { useState } from "react";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { push } = useRouter();
  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;

    push(`/search/${searchTerm}`);
  };
  return (
    <Box
      sx={{ padding: "40px 0px", width: "100%", gap: "18px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h5">Browse the Catalogue</Typography>
      <Input
        className="fadeIn"
        sx={{ display: { xs: "none", sm: "flex" }, width: "80%" }}
        autoFocus
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
        type="text"
        placeholder="Search for products..."
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              className="fadeIn"
              onClick={onSearchTerm}
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <SearchOutlined />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
};
