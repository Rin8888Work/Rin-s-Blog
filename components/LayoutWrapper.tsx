import { useState } from 'react';
import { MAIN_CONTENT_MIN_HEIGHT } from '~/constant';
import Facebook from './chatsdk/Facebook';
import { Footer } from './Footer';
import { Header } from './Header';
import { MobileNav } from './MobileNav';

export function LayoutWrapper({ children }) {
	let [navShow, setNavShow] = useState(false);
	let onToggleNav = () => setNavShow((status) => !status);

	return (
		<>
			<MobileNav navShow={navShow} onToggleNav={onToggleNav} />
			<div className="flex flex-col justify-between">
				<Header onToggleNav={onToggleNav} />
				<main style={{ minHeight: MAIN_CONTENT_MIN_HEIGHT }}>{children}</main>
				<Footer />
				<Facebook />
			</div>
		</>
	);
}
