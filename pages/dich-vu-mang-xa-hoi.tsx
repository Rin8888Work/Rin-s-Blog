import ServiceList from '~/components/ServiceList';
import { Tab, Tabs } from '~/components/Tabs';
import { getSocialServicesData } from '~/data/servicesData';
import ServiceLayout from '~/layouts/ServiceLayout';

export default function SocialServices() {
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
								{service.name}
							</Tab>
						);
					})}
				</Tabs>
			</section>
		</ServiceLayout>
	);
}
