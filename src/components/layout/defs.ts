export const LayoutTypes = [
	'sidebar-0',
	'sidebar-1',
	'topbar-0',
	'topbar-1'
] as const;

export type LayoutType = typeof LayoutTypes[number];
