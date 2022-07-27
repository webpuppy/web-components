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
		bottom: 2rem;
		border-radius: var(--wp-border-radius);
		box-shadow: var(--shadow-smallest);
		right: 2rem;
		position: fixed;
		padding: 1rem .25rem;
		width: 180px;
	}
	`];

	render() {
		return html`<slot></slot>`;
	}
}
