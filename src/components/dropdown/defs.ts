
export const WPDropdownChangeEventSignature = 'wp-dropdown-change';

export type WPDropdownChangeEventDetail = {
	el: HTMLElement;
	old_val?: string; //no old val means the old one was default
	new_val?: string; //no new val means it was deselected
}
