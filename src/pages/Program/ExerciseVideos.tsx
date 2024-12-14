import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";

interface Video {
  video: {
    videoId: string;
    title: string;
    thumbnails: { url: string }[];
    channelName: string;
  };
}

interface ExerciseVideosProps {
  exerciseVideos: any[];
  name: string;
}

const ExerciseVideos: React.FC<ExerciseVideosProps> = ({
  exerciseVideos,
  name,
}) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "28px" },
          fontWeight: 700,
          color: "#333",
          mb: "33px",
          textAlign: "center",
        }}
      >
        Tomosha qiling
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>
        Mashqalar videosi
      </Typography>
      <Stack
        sx={{
          flexDirection: { lg: "row", xs: "column" },
          gap: { lg: "40px", xs: "20px" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{
              width: "100%",
              maxWidth: "360px",
              borderRadius: "16px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 6px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img
              style={{
                borderRadius: "16px 16px 0 0",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box sx={{ p: "16px" }}>
              <Typography
                sx={{
                  fontSize: { lg: "28px", xs: "18px" },
                  fontWeight: 600,
                  color: "#333",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                {item.video.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#888",
                  textAlign: "center",
                  marginTop: "8px",
                }}
              >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
