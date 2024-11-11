// import Image from "next/image";

import navStyles from './nav.module.css';

const links = [
  { href: '/gosomewhere1', text: 'About' },
  { href: '/gosomewhere2', text: 'Web Dev' },
  { href: '/gosomewhere3', text: 'Game Dev' },
  { href: '/gosomewhere4', text: 'Resume' },
  { href: '/gosomewhere5', text: 'Others' },
]

export default function Home() {
  return (
    <main className={`${navStyles.main} w-full h-full overflow-hidden relative`}>
      <nav className={navStyles.nav}>
        {/* Nav Center */}
        <div className={navStyles.nav_center}></div>

        {links.map(({ href, text }, i) => (
          <div key={href} className={`${navStyles.nav_link_container} text-6xl m-auto`} style={{ '--rot': `${360 - 360/links.length*i}deg` }}>
            <a href={href} className="hover:text-green-700 focus:text-green-300">{text}</a>
          </div>
        ))}
      </nav>

    </main>

    // <div className="w-[500px] h-[500px] flex justify-center items-center bg-red-900">
    //   <div className="relative w-24 h-24 bg-black rounded-full">
    //     {links.map(({ href, text }, i) => (
    //       <div key={href} className={`${navStyles.transformed} m-auto`} style={{ '--rot': `${360 - 360/links.length*i}deg` }}>
    //         <a href={href} className="hover:text-green-700 focus:text-green-300">{text}</a>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
