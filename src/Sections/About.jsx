import React from 'react'
import Section from "../Components/Section";
import { List, ThemeIcon } from "@mantine/core";
import { motion } from "framer-motion";

const About = () => {
  return (
     <Section
      id="about"
      title="About Us"
      subtitle="We’re a team of engineers and designers building reliable industrial tech."
      gradient="linear-gradient(135deg,#22d3ee 0%, #60a5fa 40%, #a78bfa 100%)"
    >
      <List
        spacing="sm"
        size="lg"
        center
        icon={<ThemeIcon color="dark" variant="light" radius="xl">✓</ThemeIcon>}
        component={motion.ul}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <List.Item>10+ years in industrial automation</List.Item>
        <List.Item>Deployments across 7 countries</List.Item>
        <List.Item>ISO-compliant processes & documentation</List.Item>
      </List>
    </Section>
  )
}

export default About