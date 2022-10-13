import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { enums, CSS_RESETS } from '../../globals/exports';
import styles from './nav-item.css';

@customElement(enums.COMPONENT_PREFIX + 'nav-item')
export class WPNavItem extends LitElement {
	static override styles = [CSS_RESETS, styles];

	@property()
		href = '#';
	@property()
		text = '';

	@property({ attribute: 'is-cta', type: Boolean })
		isCta = false;

	render() {
		if(this.isCta) {
			return html`
			<wp-btn href=${this.href} variant="filled"><slot></slot></wp-btn>
			`;
		}
		else {
			return html`
			<wp-link href=${this.href}><slot></slot></wp-link>
			`;
		}
	}
}