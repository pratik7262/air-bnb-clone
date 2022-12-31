import { Box, Button, MobileStepper, Typography } from "@mui/material";
import {
  carouselImage,
  fixedIcon,
  fixedBottom,
  carouselDot,
  flexBetween,
  dFlex,
} from "../../theme/commonStyles";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import SwipeableViews from "react-swipeable-views";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { AiFillStar } from "react-icons/ai";
import './carousalCard.css'

const CarouselCard = ({ location }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxStep = location.locationImages.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSwipe = (step) => {
    setActiveStep(step);
  };
  return (
    <Box className="carouselCard" sx={{ flex: 1, position: "relative" }}>
      <Box sx={fixedIcon}>
        <FaRegHeart size={24} color="#fff" />
      </Box>

      {location.locationImages.length && (
        <SwipeableViews
          axis="x"
          index={activeStep}
          onChangeIndex={handleSwipe}
          enableMouseEvents
        >
          {location.locationImages.map((step, index) => {
            return (
              <div key={step.id}>
                <Box
                  component="img"
                  sx={carouselImage}
                  src={step.url}
                  alt={step.id}
                />
              </div>
            );
          })}
        </SwipeableViews>
      )}
      <Box sx={fixedBottom}>
        <MobileStepper
          sx={{ backgroundColor: "transparent" }}
          steps={maxStep}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              sx={carouselDot}
              onClick={handleNext}
              disabled={activeStep === maxStep - 1}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              sx={carouselDot}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>
      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <Typography component="h3"> {location.location}</Typography>
          <Typography component="h4"> {location.days}</Typography>
          <Typography component="h5"> {location.price}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={dFlex}>
            {location.isNew ? (
              <>
                <Typography component="h5">New</Typography>
                <AiFillStar size={18}/>
              </>
            ) : (
              <>
                <Typography component="h5">{location.rating}</Typography>
                <AiFillStar size={18}/>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselCard;
