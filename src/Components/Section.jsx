import React from "react";
import { Container, Title, Text, Stack, Button } from "@mantine/core";
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

const Section = ({
  id,
  title,
  subtitle,
  children,
  gradient,
  dark = false,
  center = true,
}) => {
  return (
    <section
      id={id}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "grid",
        placeItems: center ? "center" : "stretch",
        padding: "96px 20px",
        scrollMarginTop: 80,
        background: gradient,
        overflow: "hidden",
      }}
      className="gradient-noise"
    >
      {/* decorative glow blobs */}
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.25,
          background:
            "conic-gradient(from 90deg, rgba(255,255,255,.4), rgba(255,255,255,0))",
          top: -120,
          right: -120,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 380,
          height: 380,
          borderRadius: "50%",
          filter: "blur(90px)",
          opacity: 0.18,
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,.5), transparent 60%)",
          bottom: -120,
          left: -100,
          pointerEvents: "none",
        }}
      />

      <Container size="lg">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Stack gap="xs" align="center" style={{ textAlign: "center" }}>
            {title && (
    <AnimatedTitle
      text={title}
      className="mb-4"
    />
  )}
            {subtitle && (
              <Text
                size="lg"
                style={{
                  color: dark ? "rgba(17,24,39,.8)" : "rgba(255,255,255,.85)",
                  maxWidth: 880,
                }}
              >
                {subtitle}
              </Text>
            )}
            {children}

            {/* optional CTA button */}
            <Button
              size="md"
              variant={dark ? "filled" : "white"}
              color={dark ? "dark" : "dark"}
              radius="xl"
              mt="md"
              component={motion.button}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn more
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </section>
  );
};

export default Section;
