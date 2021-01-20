import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggeredList } from "../animations/itemAnimation.js";

const SecondPage = () => {
  const [items, setItem] = useState(new Array(5).fill(""));
  return (
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <button onClick={() => setItem([" ", ...items])}> Add Item </button>
      <motion.div variants={staggeredList.container}>
        {items.map((_, index) => {
          return (
            <motion.div key={index} variants={staggeredList.item}>
              Hello World!
            </motion.div>
          );
        })}
      </motion.div>

      <hr></hr>
      <Link href="/">Go back to the homepage</Link>
      <br></br>
      <Link href="/123123123">random page</Link>
    </div>
  );
};

export default SecondPage;
