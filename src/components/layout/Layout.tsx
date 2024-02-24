import { FC, ReactNode } from 'react';

import { Header } from './header/Header';
import { Footer } from './footer/Footer';

type LayoutProps = {
	children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};
