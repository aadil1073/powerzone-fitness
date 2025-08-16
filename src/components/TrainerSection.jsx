import React from "react";
import { Box, Typography, Divider, Card, CardContent, CardMedia } from "@mui/material";
import trainer1 from "../assets/trainer 1.jpg";
import trainer2 from "../assets/trainer 2.avif";
import trainer3 from "../assets/trainer 3.jpg";

export default function TrainerSection() {
    const trainers = [
        { name: "John Doe", img: trainer1 },
        { name: "Sarah Johnson", img: trainer2 },
        { name: "Mike Johnson", img: trainer3 }
    ];

    return (
        <>
            <Box
                sx={{
                    textAlign: "center",
                    px: { xs: 2, md: 4 },
                    py: { xs: 5, md: 8 },
                    background: "linear-gradient(135deg, #fff 50%, #fef2ef 100%)",
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: "#ff4b2b" }}
                >
                    Meet Our Expert Trainers
                </Typography>
                <Divider
                    sx={{
                        width: "60px",
                        mx: "auto",
                        mb: 3,
                        borderBottomWidth: 2,
                        borderColor: "#ff4b2b",
                    }}
                />

                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: 700,
                        mx: "auto",
                        mb: 5,
                        color: "#444",
                        lineHeight: 1.6,
                    }}
                >
                    At <strong>PowerZone Fitness</strong>, our professional trainers are
                    dedicated to guiding you every step of the way to achieve your fitness goals.
                </Typography>

                {/* Cards */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 4,
                        flexWrap: "wrap",
                    }}
                >
                    {trainers.map((trainer, index) => (
                        <Card
                            key={index}
                            sx={{
                                width: 250,
                                borderRadius: "12px",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="220"
                                image={trainer.img}
                                alt={trainer.name}
                                sx={{
                                    borderTopLeftRadius: "12px",
                                    borderTopRightRadius: "12px",
                                    objectFit: "cover",
                                }}
                            />
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    sx={{ textAlign: "center" }}
                                >
                                    {trainer.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>

            <Divider sx={{ my: 2 }} />
        </>
    );
}
