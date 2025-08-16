import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                py: 2,
                textAlign: "center",
                bgcolor: "#222",
                mt: 4
            }}
        >
            <Typography variant="body2" sx={{ color: "#fff" }}>
                © {new Date().getFullYear()} PowerZone Fitness. All rights reserved.
            </Typography>
        </Box>
    );
}
