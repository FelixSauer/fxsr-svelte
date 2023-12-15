import { data } from '$lib/models/Pages';
import { json } from '@sveltejs/kit';

export function GET() {
	return json(data);
}
