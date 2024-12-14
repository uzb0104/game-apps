import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../../assets/icons/body-part.png";
import TargetImage from "../../assets/icons/target.png";
import EquipmentImage from "../../assets/icons/equipment.png";

interface ExerciseDetail {
  bodyPart: string;
  gifUrl: string;
  name: string;
  target: string;
  equipment: string;
}

interface DetailProps {
  exerciseDetail: ExerciseDetail;
}

const Detail: React.FC<DetailProps> = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="detail-image"
        style={{
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{
            fontSize: { lg: "64px", xs: "30px" },
            fontWeight: 700,
            textTransform: "capitalize",
            color: "#2E3B55",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" }, color: "#4F4C4C" }}
        >
          Mashqlar sizni kuchli qiladi.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span>— bu{" "}
          {target}ga qaratilgan eng yaxshi mashqlardan biridir. U sizning
          kayfiyatingizni yaxshilashga va energiya olishga yordam beradi.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" }, color: "#3A1212" }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
