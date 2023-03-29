import React from 'react';
import Typed from 'typed.js';
import { siteMetadata } from '~/data/siteMetadata';

export function TypedBios() {
	let el = React.useRef(null);
	let typed = React.useRef(null);

	React.useEffect(() => {
		typed.current = new Typed(el.current, {
			stringsElement: '#bios',
			typeSpeed: 40,
			backSpeed: 10,
			loop: true,
			backDelay: 1000,
		});
		return () => typed.current.destroy();
	}, []);

	return (
		<div>
			<ul id="bios" className="hidden">
				<li>{`Mình có một cái tên khác ở nơi làm việc là ${siteMetadata.nickName}`}</li>
				<li>{`Mình sinh ra ở phố núi Gia Lai xinh đẹp`}</li>
				<li>{`Công việc chính của mình là thiết kế website`}</li>
				<li>{`Mình còn tham gia đầu tư crypto, cung cấp các dịch vụ mạng xã hội`}</li>
				<li>{`Nếu bạn cần tư vấn về bất kỳ vấn đề gì, vui lòng liên hệ với mình nhé`}</li>
			</ul>
			<span ref={el} className="text-neutral-900 dark:text-neutral-200" />
		</div>
	);
}
