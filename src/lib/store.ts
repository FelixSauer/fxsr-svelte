import { writable } from 'svelte/store';

export const scrollPosition = writable<any>();
export const sectionIsVisible = writable<string>();
export const navigationIsVisible = writable<boolean>();
