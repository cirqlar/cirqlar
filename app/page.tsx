import Image from "next/image";

import BgImage from "./components/background-image";
import { MERRI_REGULAR } from "./globals/font";

import styles from './index/index.module.css';
import img from './index/image.jpg';

export default function Home() {
  return (
    <>
      <main className={`${styles.indexGrid} bg-primary`}>
        <div className={`${styles.main} bg-dark`}>
          <h1 className={MERRI_REGULAR.className}>Àyànfẹ</h1>
          <p>I'm a frontend developer mostly working with frontend frameworks and tools including (but not limited to) React, Nextjs and Vuejs. I'm also learing 3d.</p>
        </div>
        <div className={`${styles.fCont} relative flex justify-center items-center`}>
          <BgImage fill className="object-cover" src={img} alt="" sizes={`(max-width: 768px) 63%, 50%`}>
            Frontend
          </BgImage>
        </div>
        <div className={`${styles.dCont} relative flex justify-center items-center`}>
          <BgImage fill className="object-cover" src={img} alt="" sizes={`(max-width: 768px) 63%, 50%`}>
            3d
          </BgImage>
        </div>
      </main>

      <footer>
  
      </footer>
    </>
  )
}
