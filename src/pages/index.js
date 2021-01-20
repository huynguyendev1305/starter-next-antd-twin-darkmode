import Head from "next/head";
import styles from "../styles/Home.module.css";
import tw, { styled, css } from "twin.macro";
import { Switch } from "antd";
import useDarkMode from "use-dark-mode";

const InputTest = styled.div(() => [
  tw`border border-b bg-gray-600 hover:text-red-500`,
  css`
    color: white;
    width: 300px;
    height: 300px;
    text-shadow: 0 0 4px #f0f, 0 0 10px #f0f, 0 0 20px #f0f, 0 0 40px #f0f;
  `,
]);
const InputTested = styled.div`
  ${({ aa }) =>
    aa &&
    css`
      background-color: yellowgreen;
    `};
  color: red;
  ${tw`border rounded p-4`};
`;

export default function Home() {
  const darkMode = useDarkMode(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <InputTest>Helllllo</InputTest>
        <InputTested aa>Alllll</InputTested>
        {/* <Button>Clicked</Button> */}
        <div>
          <button type="button" onClick={darkMode.disable}>
            ☀
          </button>
          <Switch checked={darkMode.value} onChange={darkMode.toggle} />
          <button type="button" onClick={darkMode.enable}>
            ☾
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
