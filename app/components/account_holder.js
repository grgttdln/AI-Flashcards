"use client";
import { useSession } from "next-auth/react";
import { Box, Typography, Stack, Button } from "@mui/material";

export default function AccountHolder({ ...props }) {
  return (
    <Box>
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          className="raleway-600"
          marginRight={"1.5%"}
          fontSize={"20px"}
          color={"#003875"}
          marginY={"2%"}
        >
          {props.username}
        </Typography>
      </Stack>
    </Box>
  );
}
