import { enums } from '../../globals';
import { CSS_RESETS } from '../../globals/env.css';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './style.css';
import { TypographyVariant } from './defs';

/**
 * @since 0.0.44
 *
 * @version 0.0.0
 *
 * typography resets
 */
@customElement(enums.COMPONENT_PREFIX + 'typography')
export class WPTypography extends LitElement {
	static override styles = [CSS_RESETS, styles];

	@property()
		variant: TypographyVariant = 'body';

	@property({ type: Boolean })
		block = false;

	render() {
		return html`
			<span class="wp-text ${this.variant} ${this.block ? 'block' : ''}">
				<slot></slot>
			</span>
		`;
	}
}
