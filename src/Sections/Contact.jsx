import React from 'react'
import Section from "../Components/Section";
import { TextInput, Textarea, Button, Group, Paper } from "@mantine/core";
import { motion } from "framer-motion";

const Contact = () => {
  return (
<Section
      id="contact"
      title="Contact Us"
      subtitle="Get in touch at contact@retrix.com or call +91 98765 43210."
      gradient="linear-gradient(135deg,#0f172a 0%, #1e293b 40%, #0f172a 100%)"
    >
      <Paper
        component={motion.form}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={(e) => e.preventDefault()}
        radius="xl"
        p="lg"
        shadow="xl"
        style={{
          width: 560,
          maxWidth: "100%",
          background: "white",
          border: "1px solid #e5e7eb",
        }}
      >
        <Group grow>
          <TextInput label="Name" placeholder="Your name" required />
          <TextInput label="Email" placeholder="you@company.com" required />
        </Group>
        <Textarea
          label="Message"
          placeholder="Tell us about your project…"
          minRows={4}
          mt="md"
          required
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit" radius="xl">
            Send message
          </Button>
        </Group>
      </Paper>
    </Section>
  )
}

export default Contact