import { MainMenu } from '$lib/models/MenuMain';
import { json } from '@sveltejs/kit';

export function GET() {
	return json(MainMenu);
}
