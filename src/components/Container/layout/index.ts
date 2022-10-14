import STYLES from './style.css';
import { enums, CSS_RESETS } from '../../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * @since 0.0.0
 * 
 * @version 0.0.1
 * 
 * Defines content container bound by a max width
 * auto margin
 */
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
