import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import ContactLayout from '~/layouts/ContactLayout';
import { siteMetadata } from '~/data/siteMetadata';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? 'en', ['common', 'contact', 'header'])),
		},
	};
};

export default function Contact() {
	const { t } = useTranslation(['common', 'contact']);

	return (
		<ContactLayout>
			{/* Container for demo purpose */}
			<div className="mt-14 mb-5  sm:mx-auto sm:w-3/4">
				{/* Section: Design Block */}
				<section>
					<div>
						<div className="w-full ">
							<div className="flex flex-wrap">
								<div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 lg:w-6/12 lg:px-6">
									<div className="flex items-start">
										<div className="shrink-0">
											<div className="flex h-14 w-14 items-center justify-center rounded-md bg-blue-600 p-4 shadow-md">
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="headset"
													className="w-5 text-white"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 512 512"
												>
													<path
														fill="currentColor"
														d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
													></path>
												</svg>
											</div>
										</div>
										<div className="ml-6 grow">
											<p className="mb-1 font-bold">
												{t('contact:contactPhone')}
											</p>
											<p>
												<a
													href={`tel:${t(
														`common:${siteMetadata.phoneNumber}`
													)}`}
													rel="noreferrer"
													className="umami--click--contact-phone hover:underline"
												>
													{t(`common:${siteMetadata.phoneNumber}`)}
												</a>
											</p>
										</div>
									</div>
									<p className="mt-3 text-gray-500">{t('contact:supPhone')}</p>
								</div>
								<div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 lg:w-6/12 lg:px-6">
									<div className="flex items-start">
										<div className="shrink-0">
											<div className="flex h-14 w-14 items-center justify-center rounded-md bg-blue-600 p-4 shadow-md">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="pointer-events-none h-7 w-7"
													fill="white"
													viewBox="0 0 24 24"
												>
													<title>Share via Gmail</title>
													<path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z"></path>
												</svg>
											</div>
										</div>
										<div className="ml-6 grow">
											<p className="mb-1 font-bold">{t('contact:email')}</p>
											<p>
												<a
													href={`mailto:${siteMetadata.email}`}
													rel="noreferrer"
													className="umami--click--contact-email hover:underline"
												>
													{siteMetadata.email}
												</a>
											</p>
										</div>
									</div>
									<p className="mt-3 text-gray-500">{t('contact:supEmail')}</p>
								</div>
								<div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 lg:w-6/12 lg:px-6">
									<div className="align-start flex">
										<div className="shrink-0">
											<div className="flex h-14 w-14 items-center justify-center rounded-md bg-blue-600 p-4 shadow-md">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="pointer-events-none h-7 w-7"
													fill="white"
													viewBox="0 0 24 24"
												>
													<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
												</svg>
											</div>
										</div>
										<div className="ml-6 grow">
											<p className="mb-1 font-bold">
												{t('contact:linkedin')}
											</p>
											<p>
												<a
													target="_blank"
													href={siteMetadata.linkedin}
													rel="noreferrer"
													className="umami--click--contact-linkedin hover:underline"
												>
													in/{siteMetadata.socialAccounts.linkedin}
												</a>
											</p>
										</div>
									</div>
									<p className="mt-3 text-gray-500">{t('contact:supEmail')}</p>
								</div>
								<div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 lg:w-6/12 lg:px-6">
									<div className="align-start flex">
										<div className="shrink-0">
											<div className="flex h-14 w-14 items-center justify-center rounded-md bg-blue-600 p-4 shadow-md">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="pointer-events-none h-7 w-7"
													fill="white"
													viewBox="0 0 24 24"
												>
													<title>Share via Facebook</title>
													<path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
												</svg>
											</div>
										</div>
										<div className="ml-6 grow">
											<p className="mb-1 font-bold">
												{t('contact:messenger')}
											</p>
											<p>
												<a
													target="_blank"
													href={siteMetadata.facebook}
													rel="noreferrer"
													className="umami--click--contact-facebook hover:underline"
												>
													{siteMetadata.facebook}
												</a>
											</p>
										</div>
									</div>
									<p className="mt-3 text-gray-500">{t('contact:supEmail')}</p>
								</div>
							</div>
						</div>
						<div className="mb-12 w-full  px-3 lg:mb-0 ">
							<form>
								<div className="form-group mb-6">
									<input
										type="text"
										className="form-control m-0
                                        block
                                        w-full
                                        rounded
                                        border
                                        border-solid
                                        border-gray-300
                                        bg-white bg-clip-padding
                                        px-3 py-1.5 text-base
                                        font-normal
                                        text-gray-700
                                        transition
                                        ease-in-out
                                        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
										id="exampleInput7"
										placeholder={t('contact:name')}
									/>
								</div>
								<div className="form-group mb-6">
									<input
										type="email"
										className="form-control m-0 block
                                        w-full
                                        rounded
                                        border
                                        border-solid
                                        border-gray-300
                                        bg-white bg-clip-padding
                                        px-3 py-1.5 text-base
                                        font-normal
                                        text-gray-700
                                        transition
                                        ease-in-out
                                        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
										id="exampleInput8"
										placeholder={t('contact:email')}
									/>
								</div>
								<div className="form-group mb-6">
									<textarea
										className="
                                        form-control
                                        m-0
                                        block
                                        w-full
                                        rounded
                                        border
                                        border-solid
                                        border-gray-300 bg-white
                                        bg-clip-padding px-3 py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        transition
                                        ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700
                                        focus:outline-none
          "
										id="exampleFormControlTextarea13"
										rows={3}
										placeholder={t('contact:message')}
										defaultValue={''}
									/>
								</div>

								<button
									type="submit"
									className="
                                    w-full
                                    rounded
                                    bg-gradient-to-r
                                    from-pink-600
                                    to-rose-700
                                    px-6
                                    py-2.5
                                    text-xs
                                    font-bold
                                    uppercase
                                    leading-tight text-white
                                    shadow-md transition duration-150 ease-in-out
                                    hover:from-rose-700
                                    hover:to-pink-600
                                    focus:outline-none
                                    focus:ring-0
                                    "
								>
									{t('contact:send')}
								</button>
							</form>
						</div>
					</div>
				</section>
				{/* Section: Design Block */}
			</div>
			{/* Container for demo purpose */}
		</ContactLayout>
	);
}
