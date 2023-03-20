import type { HomeServiceType } from '~/types/services';

const baseFacebook = 'services.facebook';
const baseInstagram = 'services.instagram';
const baseTiktok = 'services.tiktok';
const baseYoutube = 'services.youtube';
const baseShopee = 'services.shopee';
const baseTwitter = 'services.twitter';
const baseTraffic = 'services.traffic';
const baseReview = 'services.review';
const baseLazada = 'services.lazada';
const baseOther = 'services.other';
const baseWebsite = 'services.website';
const baseWebsitePriceList = 'website-price-list';

const websitePackage = {
	basic: 'basic',
	pro: 'pro',
	highClass: 'high-class',
};

export const getSocialServicesData = () => {
	const servicesData = [
		{
			name: `${baseFacebook}.name`,
			color: 'sky-900',
			description: `${baseFacebook}.description`,
			list: [
				{
					name: `${baseFacebook}.list.buffLikePost.name`,
					price: `${baseFacebook}.list.buffLikePost.price`,
					description: `${baseFacebook}.list.buffLikePost.description`,
				},
				{
					name: `${baseFacebook}.list.buffLikeComment.name`,
					price: `${baseFacebook}.list.buffLikeComment.price`,
					description: `${baseFacebook}.list.buffLikePost.description`,
				},
				{
					name: `${baseFacebook}.list.buffCommentPost.name`,
					price: `${baseFacebook}.list.buffCommentPost.price`,
					description: `${baseFacebook}.list.buffLikePost.description`,
				},
				{
					name: `${baseFacebook}.list.buffSharePost.name`,
					price: `${baseFacebook}.list.buffSharePost.price`,
					description: `${baseFacebook}.list.buffLikePost.description`,
				},
				{
					name: `${baseFacebook}.list.buffFollow.name`,
					price: `${baseFacebook}.list.buffFollow.price`,
					description: `${baseFacebook}.list.buffFollow.description`,
				},
				{
					name: `${baseFacebook}.list.buffReviewFanpage.name`,
					price: `${baseFacebook}.list.buffReviewFanpage.price`,
					description: `${baseFacebook}.list.buffReviewFanpage.description`,
				},
				{
					name: `${baseFacebook}.list.buffLikeFanpage.name`,
					price: `${baseFacebook}.list.buffLikeFanpage.price`,
					description: `${baseFacebook}.list.buffLikePost.description`,
				},
				{
					name: `${baseFacebook}.list.buffEyeStream.name`,
					price: `${baseFacebook}.list.buffEyeStream.price`,
					description: `${baseFacebook}.list.buffEyeStream.description`,
				},
				{
					name: `${baseFacebook}.list.buffMemberGroup.name`,
					price: `${baseFacebook}.list.buffMemberGroup.price`,
					description: `${baseFacebook}.list.buffMemberGroup.description`,
				},
				{
					name: `${baseFacebook}.list.autoLikeMonth.name`,
					price: `${baseFacebook}.list.autoLikeMonth.price`,
					description: `${baseFacebook}.list.autoLikeMonth.description`,
				},
				{
					name: `${baseFacebook}.list.autoCommentMonth.name`,
					price: `${baseFacebook}.list.autoCommentMonth.price`,
					description: `${baseFacebook}.list.autoCommentMonth.description`,
				},
			],
		},
		{
			name: `${baseInstagram}.name`,
			color: 'pink-700',
			description: `${baseInstagram}.description`,
			list: [
				{
					name: `${baseInstagram}.list.buffLike.name`,
					price: `${baseInstagram}.list.buffLike.price`,
				},
				{
					name: `${baseInstagram}.list.buffComment.name`,
					price: `${baseInstagram}.list.buffComment.price`,
				},
				{
					name: `${baseInstagram}.list.buffFollow.name`,
					price: `${baseInstagram}.list.buffFollow.price`,
				},
				{
					name: `${baseInstagram}.list.buffLikeMonth.name`,
					price: `${baseInstagram}.list.buffLikeMonth.price`,
				},
			],
		},
		{
			name: `${baseTiktok}.name`,
			color: 'rose-900',
			description: `${baseTiktok}.description`,
			list: [
				{
					name: `${baseTiktok}.list.buffLike.name`,
					price: `${baseTiktok}.list.buffLike.price`,
				},
				{
					name: `${baseTiktok}.list.buffComment.name`,
					price: `${baseTiktok}.list.buffComment.price`,
				},
				{
					name: `${baseTiktok}.list.buffFollow.name`,
					price: `${baseTiktok}.list.buffFollow.price`,
				},
				{
					name: `${baseTiktok}.list.buffLikeMonth.name`,
					price: `${baseTiktok}.list.buffLikeMonth.price`,
				},
				{
					name: `${baseTiktok}.list.buffView.name`,
					price: `${baseTiktok}.list.buffView.price`,
				},
				{
					name: `${baseTiktok}.list.buffHeart.name`,
					price: `${baseTiktok}.list.buffHeart.price`,
				},
			],
		},
		{
			name: `${baseYoutube}.name`,
			color: 'rose-600',
			description: `${baseYoutube}.description`,
			list: [
				{
					name: `${baseYoutube}.list.buffLike.name`,
					price: `${baseYoutube}.list.buffLike.price`,
				},
				{
					name: `${baseYoutube}.list.buffComment.name`,
					price: `${baseYoutube}.list.buffComment.price`,
				},
				{
					name: `${baseYoutube}.list.buffFollow.name`,
					price: `${baseYoutube}.list.buffFollow.price`,
				},
				{
					name: `${baseYoutube}.list.buffView.name`,
					price: `${baseYoutube}.list.buffView.price`,
				},
			],
		},
		{
			name: `${baseShopee}.name`,
			color: 'orange-500',
			description: `${baseShopee}.description`,
			list: [
				{
					name: `${baseShopee}.list.buffLike.name`,
					price: `${baseShopee}.list.buffLike.price`,
				},
				{
					name: `${baseShopee}.list.buffFollow.name`,
					price: `${baseShopee}.list.buffFollow.price`,
				},
			],
		},
		{
			name: `${baseTwitter}.name`,
			color: 'sky-700',
			description: `${baseTwitter}.description`,
			list: [
				{
					name: `${baseTwitter}.list.buffLike.name`,
					price: `${baseTwitter}.list.buffLike.price`,
				},
				{
					name: `${baseTwitter}.list.buffComment.name`,
					price: `${baseTwitter}.list.buffComment.price`,
				},
				{
					name: `${baseTwitter}.list.buffFollow.name`,
					price: `${baseTwitter}.list.buffFollow.price`,
				},
				{
					name: `${baseTwitter}.list.buffRetweet.name`,
					price: `${baseTwitter}.list.buffRetweet.price`,
				},
			],
		},
		{
			name: `${baseTraffic}.name`,
			color: 'blue-300',
			description: `${baseTraffic}.description`,
			list: [
				{
					name: `${baseTraffic}.list.search.name`,
					price: `${baseTraffic}.list.search.price`,
				},
				{
					name: `${baseTraffic}.list.backlink.name`,
					price: `${baseTraffic}.list.backlink.price`,
				},
				{
					name: `${baseTraffic}.list.direct.name`,
					price: `${baseTraffic}.list.direct.price`,
				},
				{
					name: `${baseTraffic}.list.click.name`,
					price: `${baseTraffic}.list.click.price`,
				},
			],
		},
		{
			name: `${baseReview}.name`,
			color: 'indigo-200',
			description: `${baseReview}.description`,
			list: [
				{
					name: `${baseReview}.list.googleMap.name`,
					price: `${baseReview}.list.googleMap.price`,
				},
				{
					name: `${baseReview}.list.application.name`,
					price: `${baseReview}.list.application.price`,
				},
			],
		},
		{
			name: `${baseLazada}.name`,
			color: 'red-600',
			description: `${baseLazada}.description`,
			list: [
				{
					name: `${baseLazada}.list.buffLike.name`,
					price: `${baseLazada}.list.buffLike.price`,
				},
				{
					name: `${baseLazada}.list.buffFollow.name`,
					price: `${baseLazada}.list.buffFollow.price`,
				},
			],
		},
		{
			name: `${baseOther}.name`,
			color: 'yellow-600',
			description: `${baseOther}.description`,
			list: [],
		},
	];

	return { servicesData };
};

export const getWebsiteServicesData = () => {
	const listName = [
		'byRequest',
		'cheapPrice',
		'introduce',
		'ecommerce',
		'realEstate',
		'aesthetic',
		'travel',
		'hotel',
		'wordpress',
		'interior',
		'news',
		'law',
		'ad',
		'studyAbroad',
	];

	const servicesData = [
		{
			name: `${baseWebsite}.name`,
			color: 'emerald-600',
			description: `${baseWebsite}.description`,
			list: listName?.map((name) => ({
				name: `${baseWebsite}.list.${name}.name`,
				price: `${baseWebsite}.list.${name}.price`,
				description: `${baseWebsite}.list.${name}.description`,
			})),
		},
	];

	const moduleWebsite = [
		{
			name: 'administration',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'home',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'banner',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'category',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'new',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'contact',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'about',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{ name: 'cart', allow: [websitePackage.highClass] },
		{ name: 'product', allow: [websitePackage.pro, websitePackage.highClass] },
		{ name: 'product-detail', allow: [websitePackage.pro, websitePackage.highClass] },
	];

	const integralPart = [
		{
			name: 'live-chat',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{ name: 'multi-language', allow: [websitePackage.highClass] },
		{
			name: 'compatible-mobile',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'code-handover',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'banner-design',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'up-post',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'up-product',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{ name: 'optimize-speed', allow: [websitePackage.pro, websitePackage.highClass] },
		{ name: 'ssl', allow: [websitePackage.pro, websitePackage.highClass] },
		{ name: 'gg-analytic', allow: [websitePackage.pro, websitePackage.highClass] },
		{ name: 'backup', allow: [websitePackage.pro, websitePackage.highClass] },
		{
			name: 'seo-standards',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'hosting-free',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'customization',
			allow: [websitePackage.pro, websitePackage.highClass],
		},

		{
			name: 'by-example',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'by-request',
			allow: [websitePackage.highClass],
		},
	];

	const websitePriceList = Object.keys(websitePackage)?.map((key) => ({
		name: `${baseWebsitePriceList}.${websitePackage[key]}.name`,
		description: `${baseWebsitePriceList}.${websitePackage[key]}.description`,
		price: `${baseWebsitePriceList}.${websitePackage[key]}.price`,
		moduleWebsite: moduleWebsite?.map((item) => ({
			name: `moduleWebsiteList.${item.name}`,
			isAllow: item.allow.includes(websitePackage[key]),
		})),
		integralPart: integralPart?.map((item) => ({
			name: `integralPartList.${item.name}`,
			isAllow: item.allow.includes(websitePackage[key]),
		})),
	}));

	return { servicesData, websitePriceList };
};

export const homeServices: HomeServiceType[] = [
	{
		name: `services.website.name`,
		description: `services.website.description`,
		image: `/static/images/services/website.png`,
	},
	{
		name: `services.seeding.name`,
		description: `services.seeding.description`,
		image: `/static/images/services/seeding.png`,
	},
	{
		name: `services.domain.name`,
		description: `services.domain.description`,
		image: `/static/images/services/domain.png`,
	},
	{
		name: `services.takeCare.name`,
		description: `services.takeCare.description`,
		image: `/static/images/services/takeCare.png`,
	},
	{
		name: `services.hosting.name`,
		description: `services.hosting.description`,
		image: `/static/images/services/hosting.png`,
	},
	{
		name: `services.qualityContent.name`,
		description: `services.qualityContent.description`,
		image: `/static/images/services/qualityContent.png`,
	},
];
