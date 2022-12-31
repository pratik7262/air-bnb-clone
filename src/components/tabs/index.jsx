import { Box, Button, Container, Tab, Tabs } from "@mui/material";
import { locationsTab} from "../../data/mockData";
import React,{useState} from "react";
import  { tabsClasses } from '@mui/material/Tabs';
import { FaFilter } from "react-icons/fa";

const NavigationTabs = () => {
    const [value, setValue] = useState(0)
    const handleChange=(value,newValue)=>{
        setValue(newValue);
    }
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          px: { xs: 0, md: "2" },
          mt: 2,
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          sx={{
            [`&.${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { Opacity: 0.3 },
            },
          }}
        >
          {locationsTab.map((tab) => {
            return <Tab key={tab.id} icon={tab.icon} label={tab.label} />;
          })}
        </Tabs>
        <Button sx={{
            display:{xs:'none',md:'flex'},
            border:'1px solid #ddd',
            borderRadius:2,
            justifyContent:'space-between',
            py:1,
            textTransform:'capitalize',
            color:'primary.main'
        }}>
            <FaFilter/> Filters
        </Button>
      </Box>
    </Container>
  );
};

export default NavigationTabs;
