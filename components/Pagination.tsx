import Link from 'next/link';
import type { PaginationType } from '~/types';

export function Pagination({ totalPages, currentPage }: PaginationType) {
	let pages = Array.from(Array(totalPages)).map((_, index) => index + 1);

	return (
		<div className="space-y-2 pt-6 sm:pt-8 md:space-y-5">
			<nav className="flex justify-center gap-x-1">
				{pages.map((pageNumber) => {
					return (
						<Link
							key={`page-${pageNumber}`}
							href={pageNumber === 1 ? '/bai-viet' : `/bai-viet/trang/${pageNumber}`}
							passHref
							legacyBehavior
						>
							<a
								className={`mx-1 rounded-md bg-gray-100 px-3 py-2 text-dark hover:bg-gray-200 dark:bg-gray-400 ${
									pageNumber === currentPage ? '!bg-gray-400 font-semibold' : ''
								}`}
								href={
									pageNumber === 1 ? '/bai-viet' : `/bai-viet/trang/${pageNumber}`
								}
							>
								{pageNumber}
							</a>
						</Link>
					);
				})}
			</nav>
		</div>
	);
}
