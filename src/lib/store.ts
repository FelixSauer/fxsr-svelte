import { writable } from 'svelte/store';

export const sectionIsVisible = writable<string>();
export const navigationIsVisible = writable<boolean>();
