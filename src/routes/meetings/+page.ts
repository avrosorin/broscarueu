import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	return redirect(301, 'https://outlook.office365.com/book/SorinBroscaru@avroit.ro/');
}) satisfies PageLoad;
