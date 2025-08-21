import React from 'react'
import { Container, Title, Text } from "@mantine/core";
import { motion } from "framer-motion";

const Section = ({ id, title, children }) => {
    
  return (
    
    <motion.section
      id={id}
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        borderBottom: "1px solid #eaeaea",
        scrollMarginTop: "70px",
        display: "flex",
        alignItems: "center",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Container size="md" style={{ textAlign: "center" }}>
        <Title order={2} mb="md">
          {title}
        </Title>
        <Text size="lg" c="dimmed">
          {children}
        </Text>
      </Container>
    </motion.section>
  )
}

export default Section