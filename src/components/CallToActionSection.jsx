// components/CallToActionSection.jsx
import React from "react";
import { Typography, Button, Stack } from "@mui/material";

export default function CallToActionSection() {
    return (
        <Stack
            spacing={2}
            alignItems="center"
            sx={{ py: 6, textAlign: "center" }}
        >

            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: "#ff4b2b" }}
            >
                Your Transformation Starts Now
            </Typography>

            <Typography
                variant="body1"
                sx={{ maxWidth: 600, color: "#444", lineHeight: 1.6 }}
            >
                At <strong>PowerZone Fitness</strong>, we combine expert coaching,
                cutting-edge equipment, and a motivating community to help you
                crush your fitness goals.
            </Typography>

            <Typography
                variant="body1"
                sx={{ maxWidth: 600, color: "#444", lineHeight: 1.6 }}
            >
                Whether you want to build strength, lose weight, or boost your
                energy, we’re here to guide you every step of the way.
            </Typography>

            {/* Button */}
            <Button
                variant="contained"
                sx={{
                    px: 4,
                    py: 1.2,
                    fontWeight: "bold",
                    borderRadius: "30px",
                    backgroundColor: "#ff4b2b",
                    "&:hover": { backgroundColor: "#e8431f" },
                    scrollBehavior: "smooth"
                }}
                onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >
                Get in Touch
            </Button>
        </Stack>
    );
}
