export interface Client {
	id: number;
	name: string;
	icon?: string;
	logo?: string;
}

export const clintTile: string = 'Check out some of the brands that I`ve worked with.';

export const clients: Client[] = [
	{
		id: 1,
		name: 'Porsche AG',
		icon: 'icon',
		logo: 'logo'
	},
	{
		id: 2,
		name: 'Volkswagen AG',
		icon: 'icon',
		logo: 'logo'
	},
	{
		id: 3,
		name: 'Mercedes Benz',
		icon: 'icon',
		logo: 'logo'
	},
	{
		id: 4,
		name: 'Daimler Truck',
		icon: 'icon',
		logo: 'logo'
	}
];
