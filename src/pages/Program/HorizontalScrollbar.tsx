import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Button, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../../assets/icons/right-arrow.png";
import LeftArrowIcon from "../../assets/icons/left-arrow.png";

interface HorizontalScrollbarProps {
  data: any[];
  bodyParts?: boolean;
  setBodyPart?: (bodyPart: string) => void;
  bodyPart?: string;
}

const LeftArrow: React.FC = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Box
      onClick={() => scrollPrev()}
      sx={{
        cursor: "pointer",
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        "& img": {
          width: "30px",
          height: "30px",
          transition: "transform 0.3s ease",
        },
        "&:hover img": {
          transform: "translateX(-5px)",
        },
      }}
    >
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Box>
  );
};

const RightArrow: React.FC = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Box
      onClick={() => scrollNext()}
      sx={{
        display: "flex",
        cursor: "pointer",
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        "& img": {
          width: "30px",
          height: "30px",
          transition: "transform 0.3s ease",
        },
        "&:hover img": {
          transform: "translateX(5px)",
        },
      }}
    >
      <img src={RightArrowIcon} alt="right-arrow"  style={{display:"flex"}}/>
    </Box>
  );
};

const HorizontalScrollbar: React.FC<HorizontalScrollbarProps> = ({
  data,
  bodyParts = false,
  setBodyPart,
  bodyPart,
}) => (
  <Box sx={{ position: "relative", width: "100%" }}>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          component="div"
          key={item.id || item}
          data-itemid={item.id || item}
          title={item.id || item}
          m="0 20px"
          sx={{
            flexShrink: 0,
            display: "inline-block",
            textAlign: "center",
            "&:hover": {
              transform: "scale(1.05)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          {bodyParts ? (
            setBodyPart &&
            bodyPart && (
              <Button
                variant="outlined"
                onClick={() => setBodyPart(item)}
                sx={{
                  padding: "10px 15px",
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  borderColor: "#FF2625",
                  color: "#FF2625",
                  "&:hover": {
                    backgroundColor: "#FF2625",
                    color: "#fff",
                  },
                }}
              >
                {item.name}
              </Button>
            )
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  </Box>
);

export default HorizontalScrollbar;
