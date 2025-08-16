import React from "react";
import { Box, Typography } from "@mui/material";

export default function BrowserFrame() {
    return (
        <Box
            sx={{
                bgcolor: "#222",
                p: 1,
                display: "flex",
                alignItems: "center",
            }}
        >

            <Box sx={{ display: "flex", gap: 1 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "red" }} />
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "yellow" }} />
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "green" }} />
            </Box>

            <Typography
                variant="h6"
                sx={{ flexGrow: 1, textAlign: "center", color: "#fff" }}
            >
                PowerZone Fitness
            </Typography>
        </Box>
    );
}
