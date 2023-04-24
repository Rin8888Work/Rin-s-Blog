import type React from 'react';
import type { PropsWithChildren } from 'react';

interface ScreenWidthProps {
	sx?: string;
}
const ScreenWidth: React.FC<PropsWithChildren<ScreenWidthProps>> = ({ children, sx = '' }) => {
	return (
		<div>
			<div className={`mx-auto max-w-5xl  px-3 xl:max-w-8xl xl:px-5 ${sx}`}>{children}</div>
		</div>
	);
};

export default ScreenWidth;
