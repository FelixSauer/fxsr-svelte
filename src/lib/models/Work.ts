export interface Work {
	companyName: string;
	start: string;
	end: string;
	role?: Role[];
	description?: string;
	link?: string;
	projects?: Project[];
}

export interface Project {
	clientName: string;
	role?: Role[];
	description?: string;
	link?: string;
}

export interface Role {
	name: string;
}

export enum RoleEnum {
	ITConsultant = 'IT Consultant',
	SoftwareEngineer = 'Software Engineer',
	FrontendEngineer = 'Frontend Engineer',
	BackendEngineer = 'Backend Engineer',
	IncidentManager = 'Incident Manager',
	DevOpsEngineer = 'DevOps Engineer',
	DataEntryClerk = 'Data Entry Clerk'
}

export const work: Work[] = [
	{
		companyName: 'Exxeta GmbH',
		start: 'Feb. 2022',
		end: 'now',
		role: [{ name: RoleEnum.ITConsultant }],
		description: 'Consulting for various clients in the automotive industry.',
		projects: [
			{
				clientName: 'ipoque',
				description: 'Development of a web application for the Daimler AG.',
				link: 'https://www.ipoque.com/'
			},
			{
				clientName: 'Daimler Truck',
				role: [{ name: RoleEnum.FrontendEngineer }, { name: RoleEnum.BackendEngineer }],
				description: 'Development of a web application for the Porsche AG.',
				link: 'https://www.daimlertruck.com/'
			}
		]
	},
	{
		companyName: 'Diconium GmbH',
		start: 'Feb. 2017',
		end: 'Jan. 2022',
		role: [
			{ name: RoleEnum.FrontendEngineer },
			{ name: RoleEnum.IncidentManager },
			{ name: RoleEnum.DevOpsEngineer }
		],
		description:
			'Development of web applications and websites for various clients. Incident Management for the diconium group.',
		projects: [
			{
				clientName: 'Volkswagen AG',
				role: [
					{ name: RoleEnum.FrontendEngineer },
					{ name: RoleEnum.DevOpsEngineer },
					{ name: RoleEnum.IncidentManager }
				],
				description: 'Development of a web application for the Daimler AG.',
				link: 'https://www.volkswagen.de/'
			},
			{
				clientName: 'Porsche AG',
				role: [{ name: RoleEnum.FrontendEngineer }],
				description: 'Development of a web application for the Porsche AG.',
				link: 'https://www.porsche.com/'
			},
			{
				clientName: 'Footlocker',
				role: [{ name: RoleEnum.IncidentManager }],
				description: 'Development of a web application for the Häfele SE & Co KG.',
				link: 'https://www.footlocker.de/'
			},
			{
				clientName: 'Häfele SE & Co KG',
				role: [{ name: RoleEnum.FrontendEngineer }, { name: RoleEnum.IncidentManager }],
				description: 'Development of a web application for the Häfele SE & Co KG.',
				link: 'https://www.haefele.de/'
			},
			{
				clientName: 'STIHL Vertriebszentrale AG & Co. KG',
				role: [{ name: RoleEnum.FrontendEngineer }, { name: RoleEnum.IncidentManager }],
				description: 'Development of a web application for the Porsche AG.',
				link: 'https://www.stihl.de/'
			},
			{
				clientName: 'Kodak',
				role: [{ name: RoleEnum.FrontendEngineer }, { name: RoleEnum.IncidentManager }],
				description: 'Development of a web application for the Porsche AG.',
				link: 'https://www.kodak.com/'
			},
			{
				clientName: 'Aventics GmbH',
				role: [{ name: RoleEnum.FrontendEngineer }],
				description: 'Development of a web application for the Aventics GmbH.'
			}
		]
	},
	{
		companyName: 'EnBW Energie Baden-Württemberg AG',
		start: 'Jul. 2016',
		end: 'Dez. 2022',
		role: [{ name: RoleEnum.DataEntryClerk }],
		description:
			'Development of web applications and websites for various clients. Incident Management for the diconium group.'
	},
	{
		companyName: 'my self',
		start: 'Jul. 2001',
		end: 'Jun. 2022',
		role: [{ name: RoleEnum.SoftwareEngineer }, { name: RoleEnum.IncidentManager }],
		description:
			'Development of web applications and websites for various clients. Incident Management for the diconium group.',
		projects: [
			{
				clientName: 'Jonathan Tilley',
				role: [{ name: RoleEnum.FrontendEngineer }],
				description: ''
			},
			{
				clientName: 'Ascawo',
				role: [{ name: RoleEnum.ITConsultant }],
				description: 'Technischeberatung und Entwicklung für die ascawo GmbH.'
			}
		]
	}
];
