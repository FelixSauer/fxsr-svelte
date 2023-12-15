import { person } from '$lib/models/Person';
import { json } from '@sveltejs/kit';

export function GET() {
	return json(person);
}
