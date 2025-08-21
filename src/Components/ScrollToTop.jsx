import React from 'react'
import { ActionIcon, Tooltip } from "@mantine/core";
import { motion, useScroll, useTransform } from "framer-motion";


const ScrollToTop = () => {
    const { scrollYProgress } = useScroll();
  const show = useTransform(scrollYProgress, [0.15, 0.2], [0, 1]);

  return (
    <motion.div
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 1001,
        scale: show,
      }}
    >
      <Tooltip label="Back to top">
        <ActionIcon
          size="xl"
          radius="xl"
          variant="gradient"
          gradient={{ from: "indigo", to: "grape", deg: 45 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </ActionIcon>
      </Tooltip>
    </motion.div>
  )
}

export default ScrollToTop