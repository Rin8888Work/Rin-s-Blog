import React from 'react';

interface ICompScrollBox {
	children: React.ReactNode;
	sx?: any;
	overflowX?: 'hidden' | 'auto';
	overflowY?: 'hidden' | 'auto';
}
const ScrollBox: React.FC<ICompScrollBox> = ({
	children,
	sx = {},
	overflowX = 'hidden',
	overflowY = 'auto',
}) => {
	return (
		<div className={`scroll-box`} style={{ ...sx, overflowX, overflowY }}>
			{children}
		</div>
	);
};

export default ScrollBox;
