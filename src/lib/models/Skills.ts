export interface Skill {
	name: string;
	description: string;
	icon?: string;
	level?: number;
}

export const skills: Skill[] = [
	{
		name: 'HTML5',
		description: 'HTML5',
		icon: 'cib:html5'
	},
	{
		name: 'Sass',
		description: 'Sass',
		icon: 'cib:sass'
	},
	{
		name: 'TypeScript',
		description: 'TypeScript',
		icon: 'cib:typescript'
	},
	{
		name: 'Angular',
		description: 'Angular',
		icon: 'cib:angular'
	},
	{
		name: 'React',
		description: 'React',
		icon: 'cib:react'
	},
	{
		name: 'Svelte',
		description: 'svelte',
		icon: 'cib:svelte-js'
	},
	{
		name: 'Lit',
		description: 'Lit',
		icon: 'cib:lit'
	},
	{
		name: 'Jest & Jasmine',
		description: 'Unit testing',
		icon: 'cib:jest'
	},
	{
		name: 'Cypress',
		description: 'e2e & component testing',
		icon: 'cib:cypress'
	},
	{
		name: 'Playwright',
		description: 'e2e & component testing',
		icon: 'cib:playwright'
	},
	{
		name: 'GO',
		description: 'Go',
		icon: 'cib:go'
	},
	{
		name: 'Java & Spring',
		description: 'java & Spring',
		icon: 'cib:spring'
	},
	{
		name: 'Responsive Web Design',
		description: 'Responsive Web Design',
		icon: 'cib:responsive'
	},
	{
		name: 'Sketch',
		description: 'Responsive Web Design',
		icon: 'cib:sketch'
	},
	{
		name: 'Adobe XD',
		description: 'Responsive Web Design',
		icon: 'cib:adobe-xd'
	},
	{
		name: 'Adobe Photoshop',
		description: 'Responsive Web Design',
		icon: 'cib:photoshop'
	},
	{
		name: 'Adobe Illustrator',
		description: 'Responsive Web Design',
		icon: 'cib:illustrator'
	},
	{
		name: 'Adobe InDesign',
		description: 'Responsive Web Design',
		icon: 'cib:inDesign'
	},
	{
		name: 'Scrum',
		description: 'UI/UX Design',
		icon: 'cib:scrum'
	},
	{
		name: 'SAFe',
		description: 'Scaled Agile Framework',
		icon: 'cib:safe'
	}
];
