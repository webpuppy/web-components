export type WPInputChangeEventSignature = 'wp-input-change';

export type WPInputChangeEventDetail = {
	oldText?: string;
	newText?: string;
};

export type WPSelectChangeEventSignature = 'wp-dropdown-change';

export type WPDropdownChangeEventDetail = {
	el: HTMLElement;
	oldValue?: string; // no old val means the old one was default
	newValue?: string; // no new val means it was deselected
};
