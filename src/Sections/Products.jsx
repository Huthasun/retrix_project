import React from 'react'
import Section from "../Components/Section";
import { Card, Group, Text, Badge } from "@mantine/core";
import { motion } from "framer-motion";

const products = [
  { name: "Retrix Edge", tag: "IoT Gateway", desc: "Secure, high-throughput edge gateway with OTA updates." },
  { name: "ControlX", tag: "PLC Suite", desc: "Low-latency controllers with visual programming." },
  { name: "VisionPro", tag: "Computer Vision", desc: "Defect detection & object tracking with on-device AI." },
  { name: "FlowCloud", tag: "Cloud SCADA", desc: "Browser dashboards, alarms, and multi-site control." },
];


const Products = () => {
  return (
    <Section
      id="products"
      title="Products"
      subtitle="Hardware + Software, designed to work beautifully together."
      gradient="linear-gradient(135deg,#0ea5e9 0%, #22d3ee 35%, #14b8a6 100%)"
    >
      <Group justify="center" mt="lg" gap="lg" wrap="wrap">
        {products.map((p, i) => (
          <Card
            key={p.name}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, delay: 0.06 * i }}
            shadow="xl"
            radius="lg"
            p="lg"
            style={{
              width: 280,
              background: "white",
              border: "1px solid #e5e7eb",
            }}
          >
            <Badge color="teal" variant="light" mb={8}>{p.tag}</Badge>
            <Text fw={700} size="lg" c="dark">{p.name}</Text>
            <Text c="dimmed" mt={6}>{p.desc}</Text>
          </Card>
        ))}
      </Group>
    </Section>
  )
}

export default Products