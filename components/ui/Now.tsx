import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@nextui-org/react";
import { Mail } from "lucide-react";

const AnimatedInfoSection = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <Card className="max-w-md w-full bg-background/60 backdrop-blur-lg">
          <CardBody className="text-center p-6">
            <p className="text-base">
              Currently working as{" "}
              <span className="font-semibold text-primary">
                Full Stack Developer
              </span>{" "}
              in{" "}
              <span className="font-semibold text-primary">InproAcademy</span>{" "}
              from 2023
            </p>
          </CardBody>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 0.5 }}
      >
        <Button
          className="font-semibold px-6"
          size="lg"
          onClick={() =>
            (window.location.href =
              "https://mail.google.com/mail/?view=cm&fs=1&to=sandippathak.com.np@gmail.com")
          }
        >
          Contact Me
          <Mail className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
};

export default AnimatedInfoSection;
