import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './style.css';
import { LinkTarget } from './defs';

const LINK_CLASS = 'wp-link';

/**
 * @since 0.0.0
 *
 * @version 0.0.1
 *
 * Anchor Tag Wrapper
 *
 * @param underline - whether or not the link is underlined
 * @param hov_underline - whether or not to underline on hover
 * @param target - link `_target` attribute
 * @param href - link destination
 */
@customElement(enums.COMPONENT_PREFIX + 'link')
export class WPLink extends LitElement {
	@property({ attribute: 'underline', type: Boolean })
		underline = false;

	@property({ attribute: 'hov-underline', type: Boolean })
		hov_underline = false;

	@property({ attribute: true, type: String })
		target: LinkTarget = '_self';

	@property({ attribute: true, type: String })
		href = '#';

	static override styles = [CSS_RESETS, style];

	renderComponent(classes: string) {
		return html`<a class=${classes} href=${this.href} target=${this.target}
			><slot></slot
		></a> `;
	}

	render() {
		if (this.hov_underline) {
			return this.renderComponent(`${LINK_CLASS} ${LINK_CLASS}--hov-underline`);
		}
		if (this.underline) {
			return this.renderComponent(`${LINK_CLASS} ${LINK_CLASS}--underline`);
		}
		return this.renderComponent(LINK_CLASS);
	}
}
