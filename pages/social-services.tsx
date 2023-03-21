import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServiceList from '~/components/ServiceList';
import { Tab, Tabs } from '~/components/Tabs';
import { getSocialServicesData } from '~/data/servicesData';
import ServiceLayout from '~/layouts/ServiceLayout';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? 'en', ['common', 'service', 'header'])),
		},
	};
};

export default function SocialServices() {
	const { t } = useTranslation(['common', 'service']);
	const { servicesData } = getSocialServicesData();

	return (
		<ServiceLayout>
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
										i18name="service"
									/>
								}
								key={index}
							>
								{t(`service:${service.name}`)}
							</Tab>
						);
					})}
				</Tabs>
			</section>
		</ServiceLayout>
	);
}