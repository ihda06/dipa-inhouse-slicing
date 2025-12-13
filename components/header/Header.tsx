"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLinks } from "./NavLinks";
import Link from "next/link";

// Logo component with stylized "M" icon
const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-linear-to-br from-blue-600 to-blue-500">
      <span className="text-lg font-bold text-white">M</span>
    </div>
    <span className="text-xl font-semibold text-gray-900">monilabs</span>
  </div>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-1">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <NavLinks />
          </div>

          {/* Action Buttons - Right */}
          <div className="hidden md:flex md:items-center md:gap-4 md:flex-1 md:justify-end">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
              asChild
            >
              <a href="#login">Login</a>
            </Button>
            <Button
              className="bg-linear-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-sm"
              asChild
            >
              <a href="#signup">Sign up</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-[400px] p-0 flex flex-col"
              >
                {/* Header with Logo */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b">
                  <Logo />
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-6">
                  <NavLinks
                    orientation="vertical"
                    onLinkClick={() => setIsMobileMenuOpen(false)}
                  />
                </div>

                {/* Action Buttons */}
                <div className="px-6 pb-6 pt-4 border-t space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                    asChild
                  >
                    <a href="#login" onClick={() => setIsMobileMenuOpen(false)}>
                      Login
                    </a>
                  </Button>
                  <Button
                    className="w-full bg-linear-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
                    asChild
                  >
                    <a
                      href="#signup"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign up
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
