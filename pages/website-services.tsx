import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServiceList from '~/components/ServiceList';
import { Tab, Tabs } from '~/components/Tabs';
import { getWebsiteServicesData } from '~/data/servicesData';
import WebsiteServiceLayout from '~/layouts/WebsiteServiceLayout';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? 'en', ['common', 'website', 'header'])),
		},
	};
};

export default function WebsiteServices() {
	const { t } = useTranslation(['common', 'website']);
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
		</WebsiteServiceLayout>
	);
}
