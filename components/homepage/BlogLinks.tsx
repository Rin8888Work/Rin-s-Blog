import { Link } from '../Link';
import { Twemoji } from '../Twemoji';

export function BlogLinks() {
	return (
		<div className="mt-4 flex flex-col space-y-1.5 ">
			<Link href="/dich-vu-mang-xa-hoi" className="inline-block hover:underline">
				<Twemoji emoji="hammer-and-wrench" />
				<span className="umami--click--home-link-social-services ml-1.5">
					Tôi cung cấp những dịch vụ mạng xã hội nào?
				</span>
			</Link>
			<Link href="/thiet-ke-web" className="inline-block hover:underline">
				<Twemoji emoji="hammer-and-wrench" />
				<span className="umami--click--home-link-website-services ml-1.5">
					Tôi cung cấp những dịch vụ thiết kế website nào?
				</span>
			</Link>
			<Link href="/bai-viet" className="inline-block hover:underline">
				<Twemoji emoji="memo" />
				<span className="umami--click--home-link-blog ml-1.5">
					Đọc thêm các bài viết mình chia sẻ.
				</span>
			</Link>
			<Link href="/khuyen-mai-ten-mien-hosting-vps" className="inline-block hover:underline">
				<Twemoji emoji="face-with-monocle" />
				<span className="umami--click--home-link-promotion-domain-hosting-vps ml-1.5">
					Chọn hosting, domain, vps/server ở đâu?
				</span>
			</Link>
			<Link href="/ve-minh" className="inline-block hover:underline">
				<Twemoji emoji="card-index" />
				<span className="umami--click--home-link-about ml-1.5">
					Thông tin thêm về mình?
				</span>
			</Link>
			<Link href="/thong-tin-thanh-toan" className="inline-block hover:underline">
				<Twemoji emoji="ticket" />
				<span className="umami--click--home-link-payment ml-1.5">
					Làm thế nào để thanh toán cho mình?
				</span>
			</Link>
			<Link href="/lien-he" className="inline-block hover:underline">
				<Twemoji emoji="link" />
				<span className="umami--click--home-link-contact ml-1.5">
					Bạn đang cần mình tư vấn?
				</span>
			</Link>
		</div>
	);
}
