import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import heroImg from "../assets/hero.jpg";

export default function HeroSection() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    px: { xs: 2, md: 4 },
                    py: { xs: 4, md: 6 },
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 3, md: 0 },
                }}
            >
                {/* Image */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        height: { xs: 250, md: 350 },
                        overflow: "hidden",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                        transition: "transform 0.4s ease",
                        "&:hover": {
                            transform: "scale(1.02)",
                        },
                    }}
                >
                    <img
                        src={heroImg}
                        alt="Gym Training"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Box>

                {/* Content */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        pl: { xs: 0, md: 4 },
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: "#ff4b2b" }}
                    >
                        Transform Your Body, Transform Your Life
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "#444", lineHeight: 1.6 }}
                    >
                        Welcome to <strong>PowerZone Fitness</strong>, your ultimate
                        destination for strength, endurance, and a healthier lifestyle.
                        Whether you’re a beginner or a professional athlete, we provide
                        world-class equipment, certified trainers, and personalized workout
                        plans to help you achieve your goals.
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "#444", lineHeight: 1.6 }}
                    >
                        Join a community that inspires you to stay fit and motivated.
                        Experience high-intensity workouts, modern facilities, and an
                        environment designed for champions.
                    </Typography>
                </Box>
            </Box>

            <Divider sx={{ my: 2 }} />
        </>
    );
}
