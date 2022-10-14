import STYLES from './style.css';
import { enums, CSS_RESETS } from '../../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement(enums.COMPONENT_PREFIX + 'container')
export class WPContainer extends LitElement {
	static styles = [CSS_RESETS, STYLES];

	render() {
		return html`
		<div class="container">
			<slot></slot>
		</div>
		`;
	}
}
