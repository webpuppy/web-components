import { WPDropdown } from '../components/dropdown/dropdown';

export type WPInputChangeEventSignature = 'wp-input-change';

export type WPInputChangeEventDetail = {
	old_text?: string;
	new_text?: string;
}

export type WPSelectChangeEventSignature = 'wp-dropdown-change';

export type WPDropdownChangeEventDetail = {
	el: HTMLElement;
	old_val?: string; //no old val means the old one was default
	new_val?: string; //no new val means it was deselected
}

