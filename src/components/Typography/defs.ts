export const TypographyVariants = [
	'heading',
	'body',
	'small',
	'italic',
	'mono',
	'bold'
] as const;

export type TypographyVariant = typeof TypographyVariants[number];