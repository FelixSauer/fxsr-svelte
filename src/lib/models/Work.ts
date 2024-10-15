export interface IWork {
	companyName: string;
	start: string;
	end: string;
	role?: IRole[];
	description?: string;
	branch?: string;
	link?: string;
	icon?: string;
	img?: string;
	projects?: IProject[];
}

export interface IProject {
	name: string;
	role?: IRole[];
	description?: string;
	branch?: string;
	link?: string;
	icon?: string;
	img?: string;
}

export interface IRole {
	name: string;
}

export enum ERole {
	ITConsultant = 'IT Consultant',
	SoftwareEngineer = 'Software Engineer',
	FrontendEngineer = 'Frontend Engineer',
	BackendEngineer = 'Backend Engineer',
	IncidentManager = 'Incident Manager',
	DevOpsEngineer = 'DevOps Engineer',
	DataEntryClerk = 'Data Entry Clerk'
}

export const work: IWork[] = [
	{
		companyName: 'Exxeta',
		end: 'now',
		start: 'Feb. 2022',
		role: [{ name: ERole.ITConsultant }],
		description: 'Consulting for various clients in the automotive industry.',
		projects: [
			{
				name: 'emag',
				description: 'Monitoring and analyse Portal',
				branch: 'mechanical engineering',
				link: 'https://www.emag.com/',
				img: 'src/lib/assets/icons/emag.svg'
			},

      {
				name: 'ipoque',
				description: 'Management Portal',
				branch: 'Telecommunication',
				link: 'https://www.ipoque.com/',
				img: 'src/lib/assets/icons/rohdeschwarz.svg'
			},
			{
				name: 'Daimler Truck',
				role: [{ name: ERole.FrontendEngineer }, { name: ERole.BackendEngineer }],
				description: 'B2B Management Portal',
				branch: 'Automotive',
				link: 'https://www.daimlertruck.com/',
				icon: 'simple-icons:mercedes'
			}
		]
	},
	{
		companyName: 'Diconium',
		end: 'Jan. 2022',
		start: 'Feb. 2017',
		role: [
			{ name: ERole.FrontendEngineer },
			{ name: ERole.IncidentManager },
			{ name: ERole.DevOpsEngineer }
		],
		description: 'Development of web applications and websites for various clients.',
		icon: '',
		projects: [
			{
				name: 'Volkswagen',
				role: [
					{ name: ERole.FrontendEngineer },
					{ name: ERole.DevOpsEngineer },
					{ name: ERole.IncidentManager }
				],
				description: 'B2B Management Portal',
				branch: 'Automotive',
				link: 'https://www.volkswagen.de/',
				icon: 'simple-icons:volkswagen'
			},
			{
				name: 'Porsche',
				role: [{ name: ERole.FrontendEngineer }],
				description: 'B2C Dealer Portal',
				branch: 'Automotive',
				link: 'https://www.porsche.com/',
				icon: 'simple-icons:porsche'
			},
			{
				name: 'Footlocker',
				role: [{ name: ERole.IncidentManager }],
				branch: 'Brands & Retail',
				description: 'B2C Dealer Portal',
				link: 'https://www.footlocker.de/',
				img: 'src/lib/assets/icons/footlocker.svg'
			},
			{
				name: 'Häfele',
				role: [{ name: ERole.FrontendEngineer }, { name: ERole.IncidentManager }],
				description: 'B2B & B2C Dealer Portal',
				branch: 'Brands & Retail',
				link: 'https://www.haefele.de/',
				img: 'src/lib/assets/icons/haefele.svg'
			},
			{
				name: 'STIHL',
				role: [{ name: ERole.FrontendEngineer }, { name: ERole.IncidentManager }],
				description: 'B2C Dealer Portal',
				branch: 'Brands & Retail',
				link: 'https://www.stihl.de/',
				img: 'src/lib/assets/icons/stihl.svg'
			},
			{
				name: 'Kodak',
				role: [{ name: ERole.FrontendEngineer }, { name: ERole.IncidentManager }],
				description: 'B2C Dealer Portal',
				branch: 'Brands & Retail',
				link: 'https://www.kodak.com/',
				icon: 'simple-icons:kodak'
			},
			{
				name: 'Aventics',
				role: [{ name: ERole.FrontendEngineer }],
				branch: 'Brands & Retail',
				description: 'B2B Dealer Portal'
			}
		]
	},
	{
		companyName: 'EnBW Energie',
		end: 'Dez. 2022',
		start: 'Jul. 2016',
		role: [{ name: ERole.DataEntryClerk }],
		description: 'Development of web applications and websites for various clients.'
	}
];
