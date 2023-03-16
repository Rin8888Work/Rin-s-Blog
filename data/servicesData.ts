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

export const getServicesData = () => {
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
