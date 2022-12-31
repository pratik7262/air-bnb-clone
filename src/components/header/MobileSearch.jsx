import { IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

const MobileSearch = () => {
  return (
    <Paper sx={{
        p:'2px 4px',
        display:"flex",
        alignItems:'center',
        width:300,
        border:' 1px solid #ccc',
        borderRadius:20
    }}>
      <IconButton sx={{padding:'10px'}}>
        <FaSearch />
      </IconButton>
      <InputBase sx={{ml:1,flex:1}} placeholder="Where To?"/>
      <IconButton sx={{padding:'10px'}}>
        <VscSettings />
      </IconButton>
    </Paper>
  );
};

export default MobileSearch;
