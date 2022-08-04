export const BtnTypes = [
	'primary',
	'secondary',
	'tertiary',
	'confirm',
	'danger',
	'back'
] as const;

export type BtnType = typeof BtnTypes[number];

export const BtnSensitivityOptions = [
	0,
	1,
	2
];

export type BtnSensitivity = typeof BtnSensitivityOptions[number];

export const BtnString = 'button';
