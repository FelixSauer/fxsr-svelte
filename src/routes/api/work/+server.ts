import { work } from '$lib/models/Work';
import { json } from '@sveltejs/kit';

export function GET() {
	return json(work);
}
