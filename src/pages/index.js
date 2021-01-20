import DarkmodeSwitcher from "../components/DarkmodeSwitcher.js";
import Layout from "../components/Layout.js";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <DarkmodeSwitcher></DarkmodeSwitcher>
      <Link href="/second">Go to page-2</Link>
    </>
  );
}
