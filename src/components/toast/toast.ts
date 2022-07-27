import {
    Enums,
	css,
	CSS_RESETS,
	WPSizeable
} from '../../globals/exports';
import {
	customElement,
    LitElement,
    html,
	state,
    property,
	when
} from 'lit-exports';
import { ToastType } from './defs';

@customElement(Enums.default.COMPONENT_PREFIX + 'toast')
export class WPToast extends LitElement {

	static styles = [CSS_RESETS,
	css`
	:host {
		display: block;
		padding: .25em;
		pointer-events: none;
	}
	`];

	@property()
	text = '';

	@property()
	type: ToastType = 'info';

	@state()
	is_displayed = true;

	render() {
		let icon = html`&#9432;`;
		return when(this.is_displayed, () => html`
		<div class="wp-toast">${icon} ${this.text}</div>
		`, () => html``);
	}
}
