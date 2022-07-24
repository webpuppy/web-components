import { LitElement, property, state, css } from './exports';
import { CSS_RESETS } from './exports';
export type WPSizeableOption = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export class WPComponentBase extends LitElement {

	/**
	 * custom style override as a string
	 */
	@property()
	override_style: string;
	static override styles = [CSS_RESETS]
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
	size?: WPSizeableOption;
}

export class WPEditable extends WPComponentBase {
	@property({ attribute: true })
	initial?: string = '';

	@state()
	latest?: string = null;

}
