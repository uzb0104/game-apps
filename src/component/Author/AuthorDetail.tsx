import React from "react";
import { Stack, Avatar, Typography, Box } from "@mui/material";

interface AuthorDetailsProps {
  avatar: string;
  name: string;
  profession: string;
}

const AuthorDetails: React.FC<AuthorDetailsProps> = ({
  avatar,
  name,
  profession,
}) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar src={avatar} alt={name} sx={{ width: 80, height: 80 }} />
      <Box textAlign="left">
        <Typography fontWeight="bold">{name}</Typography>
        <Typography variant="body2" color="gray">
          {profession}
        </Typography>
      </Box>
    </Stack>
  );
};

export default AuthorDetails;
