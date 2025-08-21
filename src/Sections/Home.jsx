import React from 'react'
import Section from "../Components/Section";
import { SimpleGrid, Paper, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";


const card = (title, text, i) => (
  <Paper
    key={i}
    component={motion.div}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 * i }}
    shadow="lg"
    radius="lg"
    p="lg"
    style={{
      background: "rgba(255,255,255,0.12)",
      backdropFilter: "blur(6px)",
      border: "1px solid rgba(255,255,255,0.2)",
    }}
  >
    <Title order={3} c="white" fw={800} mb={6}>{title}</Title>
    <Text c="rgba(255,255,255,.85)">{text}</Text>
  </Paper>
);

const Home = () => {
  return (
     <Section
      id="home"
      title="Retrix — Industrial Automation"
      subtitle="Automation, IoT, and intelligent control systems to supercharge modern industries."
      gradient="linear-gradient(135deg,#6d28d9 0%,#4f46e5 35%,#0ea5e9 100%)"
    >
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mt="lg">
        {[
          ["Fast Integration", "Plug-and-play modules that scale with your operations."],
          ["Real-time Insights", "Dashboards with alerts, KPIs and predictive signals."],
          ["24/7 Reliability", "Industrial-grade hardware + hardened software."],
        ].map(([t, d], i) => card(t, d, i))}
      </SimpleGrid>
    </Section>
  )
}

export default Home