export interface Page {
	id: string;
	isVisible?: boolean;
	htmlTarget: string;
	name: string;
	content: PageContent;
}

export interface PageContent {
	title: string;
	firstSubtitle?: string;
	firstText?: string;
	secondSubtitle?: string;
	secondText?: string;
	thirdSubtitle?: string;
	thirdText?: string;
}

export const data: Page[] = [
	{
		id: 'landing',
		name: 'landing',
		htmlTarget: 'landing',
		content: {
			title: 'hey there!',
			firstSubtitle: 'I`m Felix, a web developer from Germany.',
			firstText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			secondSubtitle: 'Second subtitle',
			secondText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			thirdSubtitle: 'Third subtitle',
			thirdText: 'Third text'
		}
	},
	{
		id: 'about',
		name: 'about',
		htmlTarget: 'about',
		content: {
			title: 'About',
			firstSubtitle: 'web developer from Germany.',
			firstText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			secondSubtitle: 'Second subtitle',
			secondText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			thirdSubtitle: 'Third subtitle',
			thirdText: 'Third text'
		}
	},
	{
		id: 'services',
		name: 'services',
		htmlTarget: 'services',
		content: {
			title: 'Services',
			firstSubtitle: 'I`m Felix, a web developer from Germany.',
			firstText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			secondSubtitle: 'Second subtitle',
			secondText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			thirdSubtitle: 'Third subtitle',
			thirdText: 'Third text'
		}
	},
	{
		id: 'contact',
		name: 'contact',
		htmlTarget: 'contact',
		content: {
			title: 'Contact',
			firstSubtitle: 'I`m Felix, a web developer from Germany.',
			firstText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			secondSubtitle: 'Second subtitle',
			secondText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			thirdSubtitle: 'Third subtitle',
			thirdText: 'Third text'
		}
	},
	{
		id: 'imprint',
		name: 'imprint',
		htmlTarget: 'imprint',
		content: {
			title: 'Imprint',
			firstSubtitle: 'I`m Felix, a web developer from Germany.',
			firstText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			secondSubtitle: 'Second subtitle',
			secondText:
				'Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio eget nunc aliquam lacinia. Donec euismod, nisl eget aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.',
			thirdSubtitle: 'Third subtitle',
			thirdText: 'Third text'
		}
	}
];
