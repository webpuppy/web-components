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
} from 'lit-exports';

@customElement(Enums.default.COMPONENT_PREFIX + 'toaster')
export class WPToaster extends LitElement {
	static styles = [CSS_RESETS,
	css`
	:host {
		background-color: var(--wp-white);
		bottom: 2rem;
		border-radius: var(--wp-border-radius);
		box-shadow: var(--shadow-smallest);
		right: 2rem;
		position: fixed;
		padding: 1rem .25rem;
		width: 180px;
		z-index: 999;
	}
	`];

	render() {
		return html`<slot></slot>`;
	}
}
