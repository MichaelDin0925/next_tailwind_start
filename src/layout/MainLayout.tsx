import React from 'react';
import Header from './Header';
// import 

const MainLayout = function ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div style={{  }}>
			<Header />
			<main style={{ height: '100%', position:'absolute', top:0, paddingTop:'74px', width:'100%' }}>
				{ children }
			</main>
		</div>
  );
};

export default MainLayout;