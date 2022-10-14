import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './style.css';

@customElement(enums.COMPONENT_PREFIX + 'fade-up')
export class WPFadeUp extends LitElement {
	static styles = [CSS_RESETS, style];

	render() {
		return html` <slot></slot> `;
	}
}
