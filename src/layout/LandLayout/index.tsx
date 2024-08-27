import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
// import 

const LandLayout = function ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			{ children }
			<Footer />
		</>
  );
};

export default LandLayout;