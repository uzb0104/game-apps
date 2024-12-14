import React from "react";
import Icon from "../../assets/icons/gym.png";
import { Stack, Typography } from "@mui/material";

interface BodyPartProps {
  item: string;
  setBodyPart: (bodyPart: string) => void;
  bodyPart: string;
}

const BodyPart: React.FC<BodyPartProps> = ({ item, setBodyPart, bodyPart }) => {
  const baseCardStyles = {
    width: "270px",
    height: "282px",
    borderBottomLeftRadius: "20px",
    cursor: "pointer",
    gap: "47px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    border: "none",
    background: "none",
  };

  const activeCardStyles = {
    ...baseCardStyles,
    borderTop: "4px solid #FF2625",
    backgroundColor: "#fff",
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  };

  const inactiveCardStyles = {
    ...baseCardStyles,
    backgroundColor: "#f9f9f9",
  };

  return (
    <button
      type="button"
      style={bodyPart === item ? activeCardStyles : inactiveCardStyles}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "50px", height: "50px", marginBottom: "15px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya, sans-serif"
        color="#3A1212"
        textTransform="capitalize"
        sx={{
          letterSpacing: "1px",
          textAlign: "center",
        }}
      >
        {item}
      </Typography>
    </button>
  );
};

export default BodyPart;
