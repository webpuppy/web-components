export const LinkTargetOptions = [
	'_self',
	'_blank',
	'_parent',
	'_top',
] as const;
export type LinkTarget = typeof LinkTargetOptions[number];
