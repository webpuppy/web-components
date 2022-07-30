export const WPEditableListTypeOptions = [
	'default',
	'grid'
] as const;

export type WPEditableListType = typeof WPEditableListTypeOptions[number];

export const WPEditableListStateOptions = [
	'initial',
	'editable',
	'deletable'
] as const;

export type WPEditableListState = typeof WPEditableListStateOptions[number];
