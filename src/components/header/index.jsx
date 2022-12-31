import { Box, Container } from "@mui/material";
import React from "react";
import { displayOnDesktop, flexBetweenCenter } from "../../theme/commonStyles";
import LocationSearch from "./LocationSearch";
import Logo from "./Logo";
import MobileSearch from "./MobileSearch";
import ProfileSetting from "./ProfileSetting";

const Header = () => {
  return (
    <Box sx={{ minHeight: 70, borderBottom: "1px solid #ddd" }}>
      <Container>
        <Box sx={{ ...flexBetweenCenter, minHeight: 70, px: 4 }}>
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
          <Box sx={displayOnDesktop}>
            <LocationSearch />
          </Box>
          <Box sx={displayOnDesktop}>
            <ProfileSetting />
          </Box>
          <Box display={{xs:'flex',md:'none'}}>
            <MobileSearch/>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
