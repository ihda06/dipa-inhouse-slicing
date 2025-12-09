"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const navigationLinks = [
  { label: "Product", href: "#product" },
  { label: "Integrations", href: "#integrations" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
];

interface NavLinksProps {
  className?: string;
  onLinkClick?: () => void;
  orientation?: "horizontal" | "vertical";
}

export function NavLinks({
  className,
  onLinkClick,
  orientation = "horizontal",
}: NavLinksProps) {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setActiveLink(href);

    // Smooth scroll to section
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    onLinkClick?.();
  };

  return (
    <nav
      className={cn(
        "flex items-center gap-8",
        orientation === "vertical" && "flex-col items-stretch gap-0 w-full",
        className
      )}
    >
      {navigationLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => handleClick(e, link.href)}
          className={cn(
            "text-sm font-medium transition-colors duration-200",
            orientation === "vertical" &&
              "py-3 px-0 w-full border-b border-gray-100 last:border-b-0",
            activeLink === link.href
              ? "text-blue-600"
              : "text-gray-700 hover:text-blue-600"
          )}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
