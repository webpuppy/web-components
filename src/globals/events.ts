export type WPInputChangeEventSignature = 'wp-input-change';

export type WPInputChangeEventDetail = {
	old_text?: string;
	new_text?: string;
}

export type WPSelectChangeEventDetail = {
	old_val?: string; //no old val means the old one was default
	new_val?: string; //no new val means it was deselected
}

export type WPCustomEvent = CustomEvent & {
	detail : WPInputChangeEventDetail | WPSelectChangeEventDetail ;
}

export type WPCustomEventData = {
	name: string;
	callback: (args: WPCustomEvent) => any;
};

export function registerCustomEvents(
	events: WPCustomEventData[]
) {
	for(const ev of events) {
		document.addEventListener(ev.name, ev.callback);
	}
}
