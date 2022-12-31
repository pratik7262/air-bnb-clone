import { Box, Typography } from "@mui/material";
import React from "react";
import { flexCenter } from "../../theme/commonStyles";
import { FaAirbnb } from "react-icons/fa";
import { pink } from "@mui/material/colors";
const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <FaAirbnb size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1,
          color: "secondary.main",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        airBnB
      </Typography>
    </Box>
  );
};

export default Logo;
