import { FooterMenu } from '$lib/models/MenuFooter';
import { json } from '@sveltejs/kit';

export function GET() {
	return json(FooterMenu);
}
