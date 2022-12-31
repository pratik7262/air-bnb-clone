import { Box, Button, Link } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { flexCenter } from "../../theme/commonStyles";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

const ProfileSetting = () => {
  return (
    <Box sx={flexCenter}>
      <Link href="#">Become A Host</Link>
      <Stack>
        <Button>
          <BsGlobe />
        </Button>
        <Button sx={{ borderRadius: 10, border: "1px solid #ddd" }}>
          <Stack padding={0}>
            <Box>
              <AiOutlineMenu style={{padding:0}} size={20} />
            </Box>
            <Box>
              <FaRegUserCircle  style={{padding:0}}  size={20} />
            </Box>
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSetting;
