"use client";

import { motion } from "motion/react";
import { Twitter, Linkedin, Youtube } from "lucide-react";
import { FooterLinks } from "./FooterLinks";
import { Newsletter } from "./Newsletter";

// Logo component matching Header
const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-linear-to-br from-blue-600 to-blue-500">
      <span className="text-lg font-bold text-white">M</span>
    </div>
    <span className="text-xl font-semibold text-gray-900">monilabs</span>
  </div>
);

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "#",
  },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white  border-gray-200"
    >
      <div className=" mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20 px-4 sm:px-6 lg:px-8 py-12 lg:py-16 border-x border-gray-200">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Logo Section */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Powerful and production-ready AI agent automation platform for
              your workflow needs.
            </p>
          </div>

          {/* Navigation Columns */}
          <FooterLinks />
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <Newsletter />
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-600">
              © 2024 monilabs. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <a
                href="#privacy"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
