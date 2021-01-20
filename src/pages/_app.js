import "antd/dist/antd.css";
import "../utils/typography.css";
import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/Layout.js";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout key={router.route}>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
