export const BtnTypes = [
	'base',
	'primary',
	'secondary',
	'confirm',
	'danger'
] as const;

export type BtnType = typeof BtnTypes[number];

export const BtnSensitivityOptions = [
	0,
	1,
	2
] as const;

export type BtnSensitivity = typeof BtnSensitivityOptions[number];


export const BtnString = 'button';
