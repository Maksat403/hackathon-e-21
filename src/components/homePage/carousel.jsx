import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://staticcontent.mypizza.kg/Promotions/Aktsiia_Afterparty/Large.png?hash=3ff831fec69684b937136a8828ca846b&quot;)",
  },
  {
    imgPath:
      "https://staticcontent.mypizza.kg/Promotions/SChASTLIVYeI_IMENINNIK/Large.png?hash=b6c4076cc83b1f0ac608eb38f264efc3&quot;)",
  },
  {
    imgPath:
      "https://staticcontent.mypizza.kg/Promotions/DETSKII_DEN_ROZhDENIIa/Large.png?hash=337642157cdd269cf8eed0f3cf19924c&quot;)",
  },
  {
    imgPath:
      "https://staticcontent.mypizza.kg/Promotions/COCA-COLA_V_PODAROK/Large.png?hash=7ed60b811ea2ff4b8d928533ea688dde&quot;)",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleCallClick = () => {
    // You can add your logic here to handle the call action
    alert("Calling...");
  };

  return (
    <Box sx={{ position: "relative", maxWidth: 1200, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 && (
              <Box
                component="img"
                sx={{
                  height: 600,
                  display: "block",
                  maxWidth: 1200,
                  overflow: "hidden",
                  width: "100%",
                  marginTop: -15,
                }}
                src={step.imgPath}
                alt={step.label}
              />
            )}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      {/* Back Button */}
      <IconButton
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
        }}
        onClick={handleBack}
        aria-label="Back"
      >
        <KeyboardArrowLeft />
      </IconButton>

      {/* Next Button */}
      <IconButton
        style={{
          position: "absolute",
          top: "50%",
          right: "5%",
          transform: "translateY(-50%)",
        }}
        onClick={handleNext}
        aria-label="Next"
      >
        <KeyboardArrowRight />
      </IconButton>

      {/* Dots for navigation */}
      <Box
        sx={{
          position: "absolute",
          bottom: "180px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: maxSteps }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: index === activeStep ? "#fff" : "#888",
              mx: 1,
              cursor: "pointer",
            }}
            onClick={() => handleStepChange(index)}
          />
        ))}
      </Box>

      {/* Phone icon and call number */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <IconButton color="primary" onClick={handleCallClick} aria-label="Call">
          <PhoneForwardedIcon fontSize="large" sx={{ color: "#F93E03" }} />
        </IconButton>
        <Typography
          variant="body1"
          sx={{ fontSize: "18px", color: "#555", fontWeight: "bold" }}
        >
          Звоните нам по номерам:
          <br />
          <a href="tel:+772510707">0(772)510707</a>{" "}
          <a href="tel:+551510707">0(551)510707</a>{" "}
          <a href="tel:+704510707">0(704)510707</a>
        </Typography>
      </Box>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
