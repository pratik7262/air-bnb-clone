import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { locations } from "../../data/mockData";
import CarouselCard from "./CarouselCard";

const LocationCards = () => {
  const [card] = useState(locations);
  if (!card.length) {
    return null;
  }
  return (
    <Box mx={2}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {card.map((location) => {
          return (
            <>
              <Grid item key={location.id} xs={12} sm={6} md={4} lg={3}>
               <CarouselCard location={location}/>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationCards;
