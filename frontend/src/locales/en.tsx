import EdTechSvg from '@/assets/svg/EdTech';
import FinTechSvg from '@/assets/svg/FinTech';
import HrTechSvg from '@/assets/svg/HrTech';
import MarketplaceSvg from '@/assets/svg/Marketplace';
import TelecommunicationsSvg from '@/assets/svg/Telecommunications';
import TourismSvg from '@/assets/svg/Tourism';
import { BankOutlined, BookOutlined, CommentOutlined, CompassOutlined, TrademarkOutlined, UsergroupAddOutlined } from '@ant-design/icons';

export const en = {
	nav: {
		about: 'about',
		projects: 'projects',
		team: 'team',
		contacts: 'contacts',
		vacancy: 'vacancy',
		blog: 'blog'
	},
	header: {
		subtitle: 'outstaff/outsourcing company',
		title: 'KVANDO Technologies',
		desc: 'We are always ready to quickly strengthen your IT team and complete a turnkey project of any complexity.',
		buttonPrimary: 'Be a partner',
		buttonSecondary: 'Evaluate projects',
	},
	about: {
		pageTitle: 'About',
		title: 'We provide|a full cycle|of project development',
		desc: 'Kvando Technologies| — specializes in product development, testing and support.',
		descList: {
			title: 'Среди наших проектов:',
			data: [
				'разработка ПО для международной мультивалютной платежной системы с количеством |юзеров 5 миллиардов человек;',
				'разработка части функционала клиентской массовой многопользовательской онлайн-игры в реальном времени с числом |юзеров около 80 миллионов;',
				'международные fintech и healthtech проекты.|'
			]
		},
		cards: {
			experience: {
				num: '4+',
				desc: 'years on the marketplace'
			},
			projects: {
				num: '80+',
				desc: 'completed projects'
			},
			partners: {
				num: '60+',
				desc: 'partner companies'
			}
		},
		list: {
			title: '',
			data: [
				'Reducing the cost of servicing full-time employees;',
				'We will offer you specialists of different levels to meet your requirements;',
				'Flexibility in personnel management;',
				'Guarantees and stability;',
				'An increase in expenses reflected in the balance sheet, which means a reduction in income taxes;',
				'Absence of administrative and financial burden on the company with the actual management of employees;',
				'The risks of occurrence of insurance and other unforeseen events with personnel have been reduced;',
				'Removal of obligations from the company on labor disputes with employees.',
			]
		},
		downloadButton: 'Скачать презентацию'
	},
	projects: {
		pageTitle: 'Projects',
		cards: {
			data: [
				{
					title: 'FinTech',
					desc: `Платежный сервис 
					Личный кабинет заемщика
					Сервис для управления задачами работников
					Внутренняя CRM система для сотрудников
					банка
					Разработка платформы для развертывания
					микросервисов, Order Management системы,
					системы авторизации
					Разработка банковского календаря для
					сотрудников`,
					cover: <FinTechSvg />
				},
				{
					title: 'EdTech',
					desc: `Платежный сервис 
					Личный кабинет заемщика
					Сервис для управления задачами работников
					Внутренняя CRM система для сотрудников
					банка
					Разработка платформы для развертывания
					микросервисов, Order Management системы,
					системы авторизации
					Разработка банковского календаря для
					сотрудников`,
					cover: <EdTechSvg />
				},
				{
					title: 'Telecom',
					desc: `Платежный сервис 
					Личный кабинет заемщика
					Сервис для управления задачами работников
					Внутренняя CRM система для сотрудников
					банка
					Разработка платформы для развертывания
					микросервисов, Order Management системы,
					системы авторизации
					Разработка банковского календаря для
					сотрудников`,
					cover: <TelecommunicationsSvg />
				},
				{
					title: 'HrTech',
					desc: `Платежный сервис 
					Личный кабинет заемщика
					Сервис для управления задачами работников
					Внутренняя CRM система для сотрудников
					банка
					Разработка платформы для развертывания
					микросервисов, Order Management системы,
					системы авторизации
					Разработка банковского календаря для
					сотрудников`,
					cover: <HrTechSvg />
				},
				{
					title: 'Tourism',
					desc: `Платежный сервис 
					Личный кабинет заемщика
					Сервис для управления задачами работников
					Внутренняя CRM система для сотрудников
					банка
					Разработка платформы для развертывания
					микросервисов, Order Management системы,
					системы авторизации
					Разработка банковского календаря для
					сотрудников`,
					cover: <TourismSvg />
				},
				{
					title: 'Marketplaces',
					desc: `Платежный сервис 
					Личный кабинет заемщика
					Сервис для управления задачами работников
					Внутренняя CRM система для сотрудников
					банка
					Разработка платформы для развертывания
					микросервисов, Order Management системы,
					системы авторизации
					Разработка банковского календаря для
					сотрудников`,
					cover: <MarketplaceSvg />
				},
			]
		}
	},
	team: {
		pageTitle: 'Team'
	},
	contacts: {
		pageTitle: 'Contacts'
	},
	contactForm: {
		pageTitle: 'Contact us',
		name: 'Your name',
		company: 'Company',
		tel: 'Phone',
		mail: 'Mail',
		message: 'Message',
		uploadButton: 'Attach a file',
		sendButton: 'Send'
	},
	blog: {
		pageTitle: 'Blog',
		category: 'Category'
	},
	vacancy: {
		pageTitle: 'Vacancy',
		desc: `Our team is waiting for you`,
		responsibilities: 'responsibilities',
		requirements: 'requirements',
		conditions: 'conditions',
		conclusion: 'If you see yourself in this description, feel free to send your resume, we will be happy to tell you about the details of the position!',
		respondButton: 'Respond',
		introduction: 'Мы - международная компания |Kvando Technologies|. IT компания, специализируемся на разработке, тестировании и поддержке программного продукта. ',
		invite: `Приглашаем в команду *vacancy*.`,
		garants: `Обучение, карьерный и финансовый рост, получение опыта в самой актуальной на сегодняшней день сфере IT гарантируем.`,
		form: {
			pageTitle: 'ОТКЛИКНУТЬСЯ НА ВАКАНСИЮ',
			name: 'Name',
			tel: 'Phone',
			mail: 'Mail',
			portfolio: 'Ссылка на портфолио',
			message: 'Message',
			uploadButton: 'Attach a file',
			sendButton: 'Send'
		}
	},
	privacy: {
		title: 'USER AGREEMENT',
		data: [
			'1. GENERAL PROVISIONS',
			'1.1. This User Agreement (hereinafter referred to as the Agreement) refers to the website located at https://kvando.tech/ru/home-2/',
			'1.2. Website “https://kvando.tech/ru/home-2 /” (hereinafter – the Site) is the property of a legal entity owner Naumenko Maxim Alexandrovich',
			'1.3. This Agreement regulates the relationship between the Site Administration (hereinafter referred to as the Site Administration) and the User of this Site.',
			'1.4. The Site Administration reserves the right to change, add or delete the clauses of this Agreement at any time without notifying the User.',
			'1.5. The use of the Site by the User means acceptance of the Agreement and the changes made to this Agreement.',
			'1.6. The User is personally responsible for checking this Agreement for changes in it.',
			'2. DEFINITIONS OF TERMS',
			'2.1. The terms listed below have the following meaning for the purposes of this Agreement:',
			'2.1.1 Website – an Internet resource located on a domain name https://kvando.tech/ru /, which carries out its activities via the Internet and related services.',
			'2.1.2. The Website contains information about Goods and / or Services and / or Other values for the user, about the Seller and / or the Service Provider, which allows you to make a choice, order and / or purchase Goods and / or receive services.',
			'2.1.3. Site Administration – authorized employees to manage the Site acting on behalf of the legal entity owner Naumenko Maxim Alexandrovich',
			'2.1.4. The Site User (hereinafter referred to as the User) is a person who has access to the Site via the Internet and uses the Site.',
			'2.1.5. The content of the website (hereinafter referred to as the Content) – protected results of intellectual activity, including texts of literary works, their titles, prefaces, annotations, articles, illustrations, covers, musical works with or without text, graphic, textual, photographic, derivative, composite and other works, user interfaces, visual interfaces, trademark names, logos, computer programs, databases, as well as design, structure, selection, coordination, appearance, general style and arrangement of this Content, part of the Site and other intellectual property objects all together and/or separately contained on the site https://kvando.tech/ru',
			'3. SUBJECT OF THE AGREEMENT',
			'3.1. The subject of this Agreement is to provide the User with access to the Goods and/or services contained on the Website.',
			'3.1.1. The Website provides the User with access to information about the Product and/or Service and to information about the purchase of the Product and/or Service on a paid/free basis;',
			'3.1.2. All existing (actually functioning) services (services) at the moment are subject to this Agreement The Site, as well as any subsequent modifications and additional services that appear in the future.',
			'3.2. Access to the site is provided free of charge.',
			'3.3. This Agreement is a public offer. By accessing the Site, the User is considered to have joined this Agreement.',
			'3.4. The use of the materials and services of the Site is regulated by the norms of the current legislation of the Russian Federation',
			'4. RIGHTS AND OBLIGATIONS OF THE PARTIES',
			'4.1. The site administration has the right to:',
			'4.1.1. To change the terms of use of the Site, as well as to change the content of this Site. The changes come into force from the moment the new version of the Agreement is published on the Website.',
			'4.2. The User has the right to:',
			'4.2.1. Use all the services available on the Site, as well as purchase any Goods and / or Services offered on the Site.',
			'4.2.2. Ask any questions related to the services of the site: by phone: by e-mail: kvandotech@gmail.com via the Feedback Form located at: https://kvando.tech/ru',
			'4.2.3. Use the Site exclusively for the purposes and in the manner provided for by the Agreement and not prohibited by the legislation of the Russian Federation.',
			'4.2.4. Copying information from the Site is allowed only with the indication of the source and with the consent of the site administration.',
			'4.2.5. Require the administration to conceal any information about the user.',
			'4.2.6. Use the website information for personal non-commercial purposes.',
			'4.3. The Site User undertakes to:',
			'4.3.1. Provide additional information at the request of the Site Administration that is directly related to the services provided by this Site.',
			'4.3.2. Observe the property and non-property rights of authors and other copyright holders when using the Site.',
			'4.3.3. Not to take actions that may be considered as disrupting the normal operation of the Site.',
			'4.3.4. Not to distribute any confidential and protected by the legislation of the Russian Federation information about individuals or legal entities using the Site.',
			'4.3.5. Avoid any actions as a result of which the confidentiality of information protected by the legislation of the Russian Federation may be violated.',
			'4.3.6. Not to use the Site for the dissemination of advertising information, except with the consent of the Site Administration.',
			'4.3.7. Not to use the services for the purpose of:',
			'4.3.7.1. violating the rights of minors and (or) harming them in any form.',
			'4.3.7.2. infringement of the rights of minorities.',
			'4.3.7.3. presenting oneself as another person or a representative of an organization and/or community without sufficient rights, including for employees of this site.',
			'4.3.7.4. misleading about the properties and characteristics of any Product and/or service posted on the Site.',
			'4.3.7.5. incorrect comparison of Goods and/or Services, as well as the formation of a negative attitude towards persons who (do not) use certain Goods and/or services, or the condemnation of such persons.',
			'4.3.8. Ensure the accuracy of the information provided',
			'4.3.9. To ensure the safety of personal data from access by third parties.',
			'4.4. The User is prohibited from:',
			'4.4.1. Use any devices, programs, procedures, algorithms and methods, automatic devices or equivalent manual processes to access, purchase, copy or track the content of the Site.',
			'4.4.2. Disrupt the proper functioning of the Site.',
			'4.4.3. Bypass the navigation structure of the Site in any way to obtain or attempt to obtain any information, documents or materials by any means that are not specifically provided by the services of this Site.',
			'4.4.4. Unauthorized access to the functions of the Site, any other systems or networks related to this Site, as well as to any services offered on the Site.',
			'4.4.5. Violate the security or authentication system on the Site or on any network related to the Site.',
			'4.4.6. Perform reverse search, track or attempt to track any information about any other User of the Site.',
			'4.4.7. To use the Site and its Content for any purposes prohibited by the legislation of the Russian Federation, as well as to incite any illegal activity or other activity that violates the rights of the Site or other persons.',
			'5. USE OF THE SITE',
			'5.1. The Site and the Content included in the Site belong to and are managed by the Site Administration.',
			'5.2. The content of the Website is protected by copyright, trademark law, as well as other intellectual property rights and unfair competition law.',
			'5.3. This Agreement applies to all additional terms and conditions for the purchase of Goods and/or the provision of services provided on the Site.',
			'5.4. The information posted on the Website should not be interpreted as a modification of this Agreement.',
			'5.5. The Site Administration has the right at any time without notifying the User to make changes to the list of Goods and services offered on the Site and (or) their prices.',
			'5.6. The document specified in clause 5.7.1 of this Agreement regulates in the relevant part and extends its effect to the User’s use Website:',
			'5.7.1. Privacy Policy:https://kvando.tech/privacy-policy/',
			'5.8. Any of the documents listed in paragraph 5.7.1. this Agreement may be subject to updating. The changes take effect from the moment they are published on the Website.',
			'6. LIABILITY',
			'6.1. Any losses that the User may incur in the event of intentional or negligent violation of any provision of this Agreement, as well as due to unauthorized access to the communications of another User, the Site Administration is not reimbursed.',
			'6.2. The site administration is not responsible for:',
			'6.2.1. Delays or failures in the process of performing an operation caused by force majeure, as well as any case of malfunctions in telecommunications, computer, electrical and other related systems.',
			'6.2.2. Actions of transfer systems, banks, payment systems and for delays related to their operation.',
			'6.2.3. Proper functioning of the Site, if the User does not have the necessary technical means for its use, and also does not bear any obligations to provide users with such means.',
			'7. VIOLATION OF THE TERMS OF THE USER AGREEMENT',
			'7.1. The Site Administration has the right to disclose information about the User if the current legislation of the Russian Federation requires or permits such disclosure.',
			'7.2. The Site Administration has the right to terminate and/or block access to the Site without prior notice to the User if the User has violated this Agreement or the terms of use of the Site contained in other documents, as well as in the event of termination of the Site or due to a technical malfunction or problem.',
			'7.3. The Site Administration is not responsible to the User or third parties for the termination of access to the Site in case of violation by the User of any provision of this Agreement or other document containing the terms of use of the Site.',
			'7.4. The Site Administration has the right to disclose any information collected about the User of this Site if disclosure is necessary in connection with an investigation or complaint regarding the misuse of the Site or to establish (identify) a User who may violate or interfere with the rights of the Site Administration or the rights of other Users of the Site.',
			'7.5. The Site Administration has the right to disclose any information about the User that it deems necessary to comply with the provisions of current legislation or court decisions, to ensure compliance with the terms of this Agreement, to protect the rights or security of the organization, Users.',
			'8. DISPUTE RESOLUTION',
			'8.1. In case of any disagreements or disputes between the Parties to this Agreement, a mandatory condition before applying to the court is to submit a claim (a written proposal for a voluntary settlement of the dispute).',
			'8.2. The recipient of the claim within 30 calendar days from the date of its receipt, notifies the applicant of the claim in writing about the results of the consideration of the claim. 8.3. If it is impossible to resolve the dispute on a voluntary basis, either Party has the right to apply to the court for protection of their rights, which are granted to them by the current legislation of the Russian Federation.',
			'8.4. Any claim regarding the terms of use of the Site must be filed within 5 days after the grounds for the claim arise, with the exception of copyright protection for the materials of the Site protected in accordance with the legislation. In case of violation of the terms of this clause, any claim is left without consideration by the court.',
			'9. ADDITIONAL CONDITIONS',
			'9.1. The Site Administration does not accept counter-offers from the User regarding changes to this User Agreement.',
			'9.2. User reviews posted on the Site are not confidential information and can be used by the Site Administration without restrictions.`',
		]
	}
};