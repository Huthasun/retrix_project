import React from 'react'
import Section from "../Components/Section";
import { Avatar, Group, Paper, Text } from "@mantine/core";
import { motion } from "framer-motion";
const clients = [
  ["Acme Motors", "OEM"],
  ["NorthGrid Energy", "Utilities"],
  ["BrightPack", "FMCG"],
  ["Helix Pharma", "Pharma"],
  ["Velocity Logistics", "Logistics"],
  ["Terra Metals", "Mining"],
];

const Clients = () => {
  return (
     <Section
      id="clients"
      title="Clients We Served"
      subtitle="Trusted by enterprises worldwide."
      gradient="linear-gradient(135deg,#f97316 0%, #fb7185 40%, #ef4444 100%)"
    >
      <Group justify="center" gap="lg" wrap="wrap" mt="md">
        {clients.map(([name, tag], i) => (
          <Paper
            key={name}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 * i }}
            withBorder
            radius="xl"
            p="md"
            style={{ background: "white", width: 260 }}
          >
            <Group>
              <Avatar radius="xl" />
              <div>
                <Text fw={700}>{name}</Text>
                <Text c="dimmed" size="sm">{tag}</Text>
              </div>
            </Group>
          </Paper>
        ))}
      </Group>
    </Section>
  )
}

export default Clients