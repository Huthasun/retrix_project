import React from 'react'
import Section from "../Components/Section";
import { Timeline, Text } from "@mantine/core";
import { motion } from "framer-motion";


const Solutions = () => {
  return (
    <Section
      id="solutions"
      title="Solutions"
      subtitle="From discovery to deployment — a proven path to value."
      gradient="linear-gradient(135deg,#10b981 0%, #22c55e 40%, #84cc16 100%)"
    >
      <Timeline active={4} bulletSize={24} lineWidth={3} mt="md" component={motion.div}
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Timeline.Item title="Assessment">
          <Text c="white">Site study, data audit, and ROI modeling.</Text>
        </Timeline.Item>
        <Timeline.Item title="Pilot">
          <Text c="white">Narrow-scope validation with success metrics.</Text>
        </Timeline.Item>
        <Timeline.Item title="Rollout">
          <Text c="white">Multi-line, multi-plant scaling with training.</Text>
        </Timeline.Item>
        <Timeline.Item title="Support">
          <Text c="white">SLAs, monitoring, and continuous improvement.</Text>
        </Timeline.Item>
      </Timeline>
    </Section>
  )
}

export default Solutions