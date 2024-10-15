import type { ICardCollection } from '$lib/models/CardCollection';
import { work } from '$lib/models/Work';
import { json } from '@sveltejs/kit';

const customers: ICardCollection[] = [];

work.map((item) => {
	item.projects?.map((project) => {
		customers.push(project);
		console.log(customers);
	});

	customers.push({
		name: item.companyName,
		description: item.description,
		icon: item?.icon,
		img: item?.img
	});
});

export function GET() {
	return json(customers);
}
