/* eslint-disable max-classes-per-file */
import { LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

import { CSS_RESETS } from './env.css';

export type WPSizeableOption = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export class WPComponentBase extends LitElement {
	/**
	 * custom style override as a string
	 */
	@property()
		override_style: string;
	static override styles = [CSS_RESETS];

	@property()
		material_symbol?: string = null;
}

export class WPOpenable extends WPComponentBase {
	/**
	 * custom boolean for open / close state on a menu of some sort
	 */
	@state()
		is_open = false;
}

export class WPSizeable extends WPComponentBase {
	/**
	 * sizeable type
	 */
	@property({ type: String })
		size?: WPSizeableOption = 'md';
}

export class WPEditable extends WPComponentBase {
	@property({ attribute: true })
		initial?: string = '';

	@property()
		slug?: string;

	@property()
		slug_key?: string;

	@state()
		latest?: string = null;
}
