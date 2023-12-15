import { skills } from '$lib/models/Skills';
import { json } from '@sveltejs/kit';

export function GET() {
	return json(skills);
}
