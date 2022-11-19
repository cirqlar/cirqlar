import Image from "next/image";

import BgImage from "./components/background-image";
import { LATO_BOLD } from "./globals/font";

import styles from './index/index.module.css';
import MainSection from "./index/main";
import FrontendSection from "./index/frontend";
import OtherSection from "./index/other";

export default function Home() {
  return (
    <>
      <main className={`${styles.main} bg-dark-purple`}>
        <MainSection />
        <FrontendSection />
        <OtherSection />
      </main>

      <div />
    </>
  )
}
