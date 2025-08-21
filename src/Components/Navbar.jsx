import React from 'react'
import { Container, Group, Anchor } from "@mantine/core";

const Navbar = () => {
    const links = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "solutions", label: "Solutions" },
  { id: "industries", label: "Industries We Serve" },
  { id: "clients", label: "Clients We Served" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact Us" },
];
  return (
    <div>
        <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "#fff",
        zIndex: 1000,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Container size="lg">
        <Group spacing="lg" h={60}>
          {links.map((sec) => (
            <Anchor
              key={sec.id}
              href={`#${sec.id}`}
              underline={false}
              c="dark"
              fw={500}
              style={{ scrollBehavior: "smooth" }}
            >
              {sec.label}
            </Anchor>
          ))}
        </Group>
      </Container>
    </header>
      
    </div>
  )
}

export default Navbar
