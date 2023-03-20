import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServiceList from '~/components/ServiceList';
import { Tab, Tabs } from '~/components/Tabs';
import TitleSection from '~/components/TitleSection';
import WebsitePricing from '~/components/WebsitePricing';
import { getWebsiteServicesData } from '~/data/servicesData';
import WebsiteServiceLayout from '~/layouts/WebsiteServiceLayout';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? 'en', [
				'common',
				'website',
				'header',
				'price-list',
			])),
		},
	};
};

export default function WebsiteServices() {
	const { t } = useTranslation(['common', 'website', 'price-list']);
	const { servicesData } = getWebsiteServicesData();

	return (
		<WebsiteServiceLayout>
			<section>
				<Tabs>
					{servicesData?.map((service, index) => {
						return (
							<Tab
								// @ts-ignore
								component={
									<ServiceList
										{...service}
										color={service.color}
										i18name="website"
										isExternalLink={false}
									/>
								}
								key={index}
							>
								{t(`website:${service.name}`)}
							</Tab>
						);
					})}
				</Tabs>
			</section>
			<section className="my-10 text-gray-800">
				<TitleSection>{t('price-list:pricingTitleSection')}</TitleSection>
				<WebsitePricing />
			</section>
		</WebsiteServiceLayout>
	);
}
