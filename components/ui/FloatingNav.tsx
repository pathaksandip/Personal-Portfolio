"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <div className="top-0  z-10 w-full">
      <AnimatePresence mode="popLayout">
        <motion.nav
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn("fixed top-0 inset-x-0 w-full", className)}
          // style={{
          //   backdropFilter: "blur(16px) saturate(180%)",
          //   backgroundColor: "rgba(17, 25, 40, 0.75)",
          //   borderBottom: "1px solid rgba(255, 255, 255, 0.125)",
          // }}
        >
          <div className="flex items-center justify-between px-4 py-2">
            <Image
              src="/Images/logo.png"
              width={150}
              height={150}
              alt="logo"
              className="relative z-10 w-20 sm:w-32 h-auto"
            />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden sm:flex items-center gap-6 sm:gap:4">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  className="text-sm text-neutral-50 hover:text-neutral-300"
                >
                  {navItem.name}
                </Link>
              ))}

              <button className="border border-neutral-200 dark:border-white/20 text-sm font-medium text-white px-4 py-2 rounded-full relative">
                <a
                  href="https://drive.google.com/file/d/1pdOrJ8jNl_ZfNYU9H7cxaM8oDpLpfQpy/view?usp=drive_link"
                  download
                >
                  Resume
                </a>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="sm:hidden px-4 py-2"
              >
                <div className="flex flex-col gap-4">
                  {navItems.map((navItem, idx) => (
                    <Link
                      key={`mobile-link-${idx}`}
                      href={navItem.link}
                      className="text-sm text-neutral-50 hover:text-neutral-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-2">{navItem.icon}</span>
                      {navItem.name}
                    </Link>
                  ))}
                  <button className="border border-neutral-200 dark:border-white/20 text-sm font-medium text-white px-4 py-2 rounded-full relative w-full">
                    <a
                      href="https://drive.google.com/uc?export=download&id=16ARtlhxZHZk-iHsNGPyCg6po4Cz5GOcv"
                      download
                    >
                      Resume
                    </a>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </AnimatePresence>
    </div>
  );
};
