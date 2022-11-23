import MainSection from "./index/main";
import FrontendSection from "./index/frontend";
import OtherSection from "./index/other";
import MainMovement from "./index/movement";

import styles from './index/index.module.css';

export default function Home() {
	return (
		<>
			<main className={`${styles.main} bg-dark-purple`} id="maincontainer">
				<MainSection />
				<FrontendSection />
				<OtherSection />
			</main>

			<MainMovement />
		</>
	)
}
