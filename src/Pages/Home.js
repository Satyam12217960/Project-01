import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to the Home Page</h1>
      <p>This is an example of page animations using framer-motion.</p>
    </motion.div>
  );
};

export default Home;
