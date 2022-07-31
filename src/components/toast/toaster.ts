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
import style from './toaster.css';
@customElement(Enums.default.COMPONENT_PREFIX + 'toaster')
export class WPToaster extends LitElement {
	static styles = [CSS_RESETS, style];

	render() {
		return html`<slot></slot>`;
	}
}
