import React from 'react'
import Section from "../Components/Section";
import { SimpleGrid, Paper, Title, Text } from "@mantine/core";
import { motion } from "framer-motion";

const items = [
  ["Automotive", "Traceability, torque, and end-of-line tests."],
  ["Pharma", "Batch integrity, clean-room analytics, CFR compliance."],
  ["FMCG", "High-speed vision, OEE uplift, packaging QA."],
  ["Energy", "Substation monitoring, anomaly alerts, load control."],
  ["Logistics", "Conveyor control, SLAM, digital twins."],
  ["Metal & Mining", "Harsh-env sensing, predictive maintenance."],
];


const Industries = () => {
  return (
     <Section
      id="industries"
      title="Industries We Serve"
      subtitle="Battle-tested across multiple verticals."
      gradient="linear-gradient(135deg,#6366f1 0%, #a855f7 40%, #ec4899 100%)"
    >
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mt="md">
        {items.map(([t, d], i) => (
          <Paper
            key={t}
            component={motion.div}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * i }}
            shadow="md"
            radius="xl"
            p="lg"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,.2)",
              backdropFilter: "blur(6px)",
            }}
          >
            <Title order={3} c="white" mb={4}>{t}</Title>
            <Text c="rgba(255,255,255,.9)">{d}</Text>
          </Paper>
        ))}
      </SimpleGrid>
    </Section>
  )
}

export default Industries