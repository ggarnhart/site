import React, { Component } from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";

class Card extends Component {
  render() {
    var variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5 }}
        variants={variants}
        className="greg-card"
      >
        <div className="greg-flex-row">
          <motion.a
            className="greg-btn purple-background no-decoration"
            href="mailto:greg.garnhart12@gmail.com"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Want to chat?
          </motion.a>
        </div>
      </motion.div>
    );
  }
}
export default Card;
