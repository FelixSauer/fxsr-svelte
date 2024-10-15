import { certs } from '$lib/models/Certs';
import { json } from '@sveltejs/kit';

export function GET() {
	return json(certs);
}
