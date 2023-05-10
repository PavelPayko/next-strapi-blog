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
		subtitle: 'outstaff/outsourcing company.',
		title: 'KVANDO Technologies',
		desc: 'Всегда готовы быстро усилить вашу IT команду и выполнить проект любой сложности под ключ.',
		buttonPrimary: 'Стать партнером',
		buttonSecondary: 'Оценить проект',
	},
	about: {
		pageTitle: 'About',
		title: 'Обеспечиваем полный цикл разработки проекта',
		desc: 'Kvando Technologies, Inc. — специализируется на разработке, тестировании и поддержке продукта. Среди наших проектов — разработка ПО для международной мультивалютной платежной системы с количеством юзеров 5 миллиардов человек, разработка части функционала клиентской массовой многопользовательской онлайн-игры в реальном времени с числом юзеров около 80 миллионов, международные fintech и healthtech проекты.',
		cards: {
			experience: {
				num: '3+',
				desc: 'года на рынке'
			},
			projects: {
				num: '80+',
				desc: 'завершенных проектов'
			},
			partners: {
				num: '60+',
				desc: 'компаний партнеров'
			}
		},
		list: {
			title: '',
			data: [
				'Снижение затрат на обслуживание штатных сотрудников;',
				'Предложим Вам специалистов разного уровня под ваши требования;',
				'Гибкость в управлении персоналом;',
				'Гарантии и стабильность;',
				'Увеличение расходов, отображаемых в бухгалтерском балансе, а значит снижение налогов на прибыль;',
				'Отсутствие административной и финансовой нагрузки на компанию при фактическом руководстве сотрудниками;',
				'Уменьшены риски возникновения страховых и прочих непредвиденных случаев с персоналом;',
				'Снятие с компании обязательств по трудовым спорам с сотрудниками.',
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
					cover: <BankOutlined />
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
					cover: <BookOutlined />
				},
				{
					title: 'Телекоммуникации',
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
					cover: <CommentOutlined />
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
					cover: <UsergroupAddOutlined />
				},
				{
					title: 'Туризм',
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
					cover: <CompassOutlined />
				},
				{
					title: 'Маркетплейсы',
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
					cover: <TrademarkOutlined />
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
	}
};