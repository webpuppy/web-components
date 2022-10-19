import { enums } from '../../globals';
import { CSS_RESETS } from '../../globals/env.css';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './style.css';

/**
 * @since 0.0.44
 *
 * @version 0.0.0
 *
 * <hr /> tag restyled
 */
@customElement(enums.COMPONENT_PREFIX + 'divider')
export class WPDivider extends LitElement {
	static override styles = [CSS_RESETS, styles];
	render() {
		return html` <hr /> `;
	}
}
