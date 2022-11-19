import Image from "next/image";

import BgImage from "./components/background-image";
import { MERRI_REGULAR } from "./globals/font";

import styles from './index/index.module.css';
import img from './index/image.jpg';

export default function Home() {
  return (
    <>
      <main className={`${styles.indexGrid} bg-primary`}>
        <div className={`${styles.main} bg-dark flex flex-col justify-center items-start md:px-10 lg:px-24`}>
          <div className="md:w-[320px] lg:w-[410px]">
            <h1>
              <span className="lg:text-4xl">Hi! It's me!</span>
              <span className={`${MERRI_REGULAR.className} pt-2 pb-6 flex items-center md:text-8xl md:h-[160px] lg:text-9xl lg:h-[220px]`}>Àyànfẹ</span>
            </h1>
            <p className="md:text-base lg:text-xl text-justify">I'm a frontend developer mostly working with frontend frameworks and tools including (but not limited to) React, Nextjs and Vuejs. I'm also learing 3d.</p>
          </div>
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
