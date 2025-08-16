import React, { useState } from "react";
import {
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/weight.png";

export default function Navbar() {
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width:768px)");

    const scrollToSection = (id) => {
        navigate("/");
        setTimeout(() => {
            const section = document.getElementById(id);
            if (section) {
                const offset = 70;
                const sectionTop = section.offsetTop - offset;
                window.scrollTo({ top: sectionTop, behavior: "smooth" });
            }
        }, 100);
        setMobileOpen(false);
    };

    const menuItems = [
        { text: "Home", id: "hero" },
        { text: "About Us", id: "about" },
        { text: "Trainers", id: "trainers" },
        { text: "Contact", id: "cta" }
    ];

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 4,
                py: 1.5,
                bgcolor: "#fff",
                position: "sticky",
                top: 0,
            }}
        >
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src={logo} alt="Gym Logo" style={{ height: "40px" }} />
            </Box>

            {/* Desktop Menu */}
            {!isMobile && (
                <Box sx={{ display: "flex", gap: 3 }}>
                    {menuItems.map((item) => (
                        <Button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            sx={{
                                color: "#000",
                                fontWeight: 500,
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    color: "#ff4b2b",
                                    transform: "scale(1.05)"
                                }
                            }}
                        >
                            {item.text}
                        </Button>
                    ))}
                </Box>
            )}

            {/* Hamburger Menu */}
            {isMobile && (
                <>
                    <IconButton
                        sx={{ color: "#000" }}
                        onClick={() => setMobileOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Drawer
                        anchor="right"
                        open={mobileOpen}
                        onClose={() => setMobileOpen(false)}
                    >
                        <List sx={{ width: 200 }}>
                            {menuItems.map((item) => (
                                <ListItem key={item.id} disablePadding>
                                    <ListItemButton
                                        onClick={() => scrollToSection(item.id)}
                                    >
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </>
            )}
        </Box>
    );
}
