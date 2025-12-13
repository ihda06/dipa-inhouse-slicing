"use client";

import { motion } from "motion/react";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "API", href: "#api" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "#pricing" },
      { label: "Docs", href: "#docs" },
      { label: "Templates", href: "#templates" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Academy", href: "#academy" },
      { label: "Support", href: "#support" },
      { label: "Community", href: "#community" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Sales", href: "#sales" },
      { label: "Marketing", href: "#marketing" },
      { label: "HR", href: "#hr" },
      { label: "IT", href: "#it" },
      { label: "Finance", href: "#finance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function FooterLinks() {
  return (
    <>
      {footerLinks.map((column, index) => (
        <motion.div
          key={column.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="lg:col-span-1"
        >
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            {column.title}
          </h3>
          <ul className="space-y-3">
            {column.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </>
  );
}
