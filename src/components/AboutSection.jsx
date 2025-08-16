import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import aboutImg from "../assets/gym.jpg";

export default function AboutSection() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    px: { xs: 2, md: 4 },
                    py: { xs: 4, md: 6 },
                    gap: { xs: 3, md: 4 },
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                {/* Text */}
                <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: "#ff4b2b" }}
                    >
                        About PowerZone Fitness
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "#444", lineHeight: 1.6 }}
                    >
                        At <strong>PowerZone Fitness</strong>, we believe that fitness is
                        not just about building muscles — it’s about building a better you.
                        Our mission is to create an inclusive, motivating, and inspiring
                        environment where everyone can achieve their personal fitness goals.
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "#444", lineHeight: 1.6 }}
                    >
                        From state-of-the-art equipment to certified trainers, we provide
                        everything you need to transform your lifestyle. Whether you are
                        looking to lose weight, gain strength, or improve endurance, we’re
                        here to support you every step of the way.
                    </Typography>
                </Box>

                {/* Image */}
                <Box
                    sx={{
                        flex: 1,
                        height: { xs: 250, md: 300 },
                        borderRadius: "8px",
                        overflow: "hidden",
                        transition: "transform 0.4s ease",
                        "&:hover": {
                            transform: "scale(1.02)",
                        },
                    }}
                >
                    <img
                        src={aboutImg}
                        alt="About PowerZone Fitness"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Box>
            </Box>

            <Divider sx={{ my: 2 }} />
        </>
    );
}
