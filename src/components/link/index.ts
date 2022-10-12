import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LINK_STYLES } from './style.css';
import { LinkTarget } from './defs';

/**
 * Anchor Tag Wrapper
 */
@customElement(enums.COMPONENT_PREFIX + 'link')
export class WPLink extends LitElement {
	@property({ attribute: true, type: Boolean })
		hov_underline = false;

	@property({ attribute: true, type: Boolean })
		no_icon = false;

	@property({ attribute: true, type: String })
		target: LinkTarget = '_self';

	@property({ attribute: true, type: String })
		href = '#';

	@property({ attribute: true, type: String })
		text = '';

	static override styles = [CSS_RESETS, LINK_STYLES];

	render_component(classes: string) {
		if (this.target === '_blank' && !this.no_icon) {
			return html`<a
				class=${classes}
				href=${this.href}
				target=${this.target}
				>${this.text}<slot></slot> &#x2197;</a
			> `;
		}
		return html`<a
			class=${classes}
			href=${this.href}
			target=${this.target}
			>${this.text}<slot></slot
		></a> `;
	}

	render() {
		if (this.hov_underline) {
			return this.render_component('wp-link wp-link--hov-underline');
		}
		return this.render_component('wp-link');
	}
}
