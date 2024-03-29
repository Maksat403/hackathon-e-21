import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

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

function ImageSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
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
    alert("Calling...");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeStep]);

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "100%",
        flexGrow: 1,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${activeStep * 100}%)`,
        }}
      >
        {images.map((step, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 100%",
              boxSizing: "border-box",
              paddingRight: "15px",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "auto",
                display: "block",
                maxWidth: "100%",
                width: "100%",
                marginTop: -15,
              }}
              src={step.imgPath}
              alt={step.label}
            />
          </div>
        ))}
      </div>

      {/* Back Button */}
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
          display: { xs: "none", md: "block" },
        }}
        onClick={handleBack}
        aria-label="Back"
      >
        <KeyboardArrowLeft />
      </IconButton>

      {/* Next Button */}
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: "5%",
          transform: "translateY(-50%)",
          display: { xs: "none", md: "block" },
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
          bottom: { xs: "40px", md: "180px" },
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
          // display: { xs: "block", md: "none" },
        }}
      >
        <IconButton color="primary" onClick={handleCallClick} aria-label="Call">
          <PhoneForwardedIcon fontSize="large" sx={{ color: "#F93E03" }} />
        </IconButton>
        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            color: "#555",
            fontWeight: "bold",
            "@media (max-width: 600px)": {
              fontSize: "14px",
            },
          }}
        >
          Звоните нам по номерам:
          <br />
          <a
            href="tel:+772510707"
            style={{ textDecoration: "none", color: "#555" }}
          >
            0(772) 510 707 //
          </a>{" "}
          <a
            href="tel:+551510707"
            style={{ textDecoration: "none", color: "#555" }}
          >
            0(551) 510 707 //
          </a>{" "}
          <a
            href="tel:+704510707"
            style={{ textDecoration: "none", color: "#555" }}
          >
            0(704) 510 707
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default ImageSlider;
