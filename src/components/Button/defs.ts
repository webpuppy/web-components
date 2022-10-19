export const ButtonVariants = ['fill', 'outline', 'hover'] as const;

export type ButtonVariant = typeof ButtonVariants[number];

export const BtnSensitivityOptions = [0, 1, 2];

export type BtnSensitivity = typeof BtnSensitivityOptions[number];

export const BtnString = 'button';

export const ButtonColors = [
	'primary',
	'secondary',
	'confirm',
	'danger',
	'warning',
	'inherit',
	'none'
] as const;
export type ButtonColor = typeof ButtonColors[number];
