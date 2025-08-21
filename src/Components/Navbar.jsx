import React from 'react'
import { Container, Group, Anchor, Image,Paper } from "@mantine/core";
import Retrix from "../assets/retrix_logo.jpeg";
import { motion } from "framer-motion";

const Navbar = () => {
    const links = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "solutions", label: "Solutions" },
  { id: "industries", label: "Industries We Serve" },
  { id: "clients", label: "Clients We Served" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact Us" },
];
  return (
  <Paper
      component="header"
      shadow="sm"
      radius={0}
      withBorder={false}
      style={{
        position: "fixed",
        top: 0,
        insetInline: 0,
        zIndex: 1000,
        background:
          "linear-gradient(90deg, #111827 0%, #1f2937 35%, #111827 100%)",
      }}
    >
      <Container
        size="lg"
        style={{
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* LOGO LEFT, perfectly aligned */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Image
            src={Retrix}
            alt="Retrix"
            height={36}
            fit="contain"
            styles={{
              root: { display: "flex", alignItems: "center" },
              image: { objectFit: "contain" },
            }}
          />
        </motion.div>

        {/* LINKS */}
        <Group gap="lg">
          {links.map((l, i) => (
            <motion.div
              key={l.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <Anchor
                href={`#${l.id}`}
                underline="never"
                style={{
                  color: "white",
                  fontWeight: 600,
                  letterSpacing: 0.2,
                  padding: "6px 8px",
                  borderRadius: 8,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {l.label}
              </Anchor>
            </motion.div>
          ))}
        </Group>
      </Container>
    </Paper>
      
  
  )
}

export default Navbar
