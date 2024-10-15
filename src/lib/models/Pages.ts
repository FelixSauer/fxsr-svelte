export interface IPage {
	id: string;
	isVisible?: boolean;
	htmlTarget: string;
	name: string;
	content: IPageContent;
}

export interface IPageContent {
	title: string;
	author?: string;
	date?: string;
	slots?: IContentSlot[];
}

export interface IContentSlot {
	subtitle?: string;
	paragraph?: string;
	image?: string;
}

export const data: IPage[] = [
	{
		id: 'landing',
		name: 'landing',
		htmlTarget: 'landing',
		content: {
			title: 'hey there!',
			author: 'my self',
			date: '2020-01-01',
			slots: [
				{
					subtitle: 'I`m Felix, a web developer from Germany.',
					paragraph:
						'I am Felix and I specialize in solving business problems through modern custom software applications. <br /> With over 8 years of experience as a software developer, I have focused on frontend development, creating cutting-edge enterprise websites and applications. <br/> Aside from addressing business requirements, I am committed to staying up-to-date with the latest technologies and learning continuously from failures.'
				}
			]
		}
	},
	{
		id: 'services',
		name: 'services',
		htmlTarget: 'services',
		content: {
			title: 'services',
			date: '2020-01-01',
			slots: [
				{
					subtitle: 'Services',
					paragraph:
						'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.'
				},
				{
					subtitle: 'I`m Felix, a web developer from Germany.',
					paragraph:
						'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.'
				}
			]
		}
	},
	{
		id: 'contact',
		name: 'contact',
		htmlTarget: 'contact',
		content: {
			title: 'contact',
			slots: [
				{
					subtitle: 'I`m Felix, a web developer from Germany.',
					paragraph:
						'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.'
				},
				{
					subtitle: 'I`m Felix, a web developer from Germany.',
					paragraph:
						'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.'
				}
			]
		}
	},
	{
		id: 'imprint',
		name: 'imprint',
		htmlTarget: 'imprint',
		content: {
			title: 'Imprint',
			slots: [
				{
					subtitle: 'Imprint',
					paragraph: 'Imprint'
				}
			]
		}
	}
];
