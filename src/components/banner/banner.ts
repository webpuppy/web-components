import bannerCss from './banner.css';
import { enums, CSS_RESETS } from '../../globals/exports';
import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

@customElement(enums.COMPONENT_PREFIX + 'banner')
export class WPBanner extends LitElement {
	static override styles = [CSS_RESETS, bannerCss];

	@property()
	icon?: string;

	@property({ attribute: true, type: Boolean })
	cancellable?: boolean;

	@state()
	is_closed = false;

	toggle(type?: string) {
		if (type) {
			const ev = new CustomEvent('wp-banner-' + type);
			window.dispatchEvent(ev);
		}
		this.is_closed = !this.is_closed;
	}
	render() {
		return when(
			!this.is_closed,
			() => html`
				<div id="banner">
					<slot></slot>
					<nav id="response-row">
						<button @click=${() => this.toggle('confirm')}>✓</button>
						${this.cancellable
							? html`<button @click=${() => this.toggle('cancel')}>X</button>`
							: html``}
					</nav>
				</div>
			`,
			() => html``
		);
	}
}
