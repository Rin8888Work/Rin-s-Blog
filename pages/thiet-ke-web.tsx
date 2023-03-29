import ServiceList from '~/components/ServiceList';
import { Tab, Tabs } from '~/components/Tabs';
import TitleSection from '~/components/TitleSection';
import WebsitePricing from '~/components/WebsitePricing';
import { getWebsiteServicesData } from '~/data/servicesData';
import WebsiteServiceLayout from '~/layouts/WebsiteServiceLayout';

export default function WebsiteServices() {
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
										isExternalLink={false}
									/>
								}
								key={index}
							>
								Đa ngành nghề, đa công nghệ
							</Tab>
						);
					})}
				</Tabs>
			</section>
			<section className="my-10 text-gray-800">
				<TitleSection>Bảng giá tham khảo</TitleSection>
				<WebsitePricing />
			</section>
		</WebsiteServiceLayout>
	);
}
