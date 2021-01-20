import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/pageAnimation.js";
import tw from "twin.macro";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <header className="AppHeader">Header</header>
      <main className="AppMain">
        <motion.div
          initial="initial"
          exit="exit"
          animate="animate"
          variants={pageVariants}
          transition={pageTransition}
          tw="container"
        >
          {children}
        </motion.div>
      </main>
      <footer className="AppFooter">Footer</footer>
    </div>
  );
};

export default Layout;
