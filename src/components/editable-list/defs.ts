export const WPEditableListTypeOptions = [
	'default'
] as const;

export type WPEditableListType = typeof WPEditableListTypeOptions[number];
