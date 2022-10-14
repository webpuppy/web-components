import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { enums, CSS_RESETS } from '../../globals/exports';
import styles from './nav-item.css';

/**
 * @since 0.0.0
 * 
 * @version 0.0.0
 * 
 * defines nav item child container
 * @param href - link for nav item to route to
 */
@customElement(enums.COMPONENT_PREFIX + 'nav-item')
export class WPNavItem extends LitElement {
	static override styles = [CSS_RESETS, styles];

	@property()
		href = '#';

	@property({ attribute: 'is-cta', type: Boolean })
		isCta = false;

	render() {
		if (this.isCta) {
			return html`
			<wp-button href=${this.href} variant="fill" color="primary"><slot></slot></wp-button>
			`;
		} else {
			return html`
			<wp-link href=${this.href}><slot></slot></wp-link>
			`;
		}
	}
}
