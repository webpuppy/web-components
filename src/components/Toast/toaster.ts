import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './toaster.css';

@customElement(enums.COMPONENT_PREFIX + 'toaster')
export class WPToaster extends LitElement {
	static styles = [CSS_RESETS, style];

	render() {
		return html`<slot></slot>`;
	}
}
