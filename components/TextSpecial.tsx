import type React from 'react';

interface TextSpecial {
	text: string;
	color: string;
}

const TextSpecial: React.FC<TextSpecial> = ({ text, color }) => {
	return <span className={`text-${color}-600`}>{text}</span>;
};

export default TextSpecial;
