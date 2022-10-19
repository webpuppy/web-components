import bannerCss from './banner.css';
import { enums, CSS_RESETS } from '../../globals/exports';
import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { BannerPosition } from './defs';
/**
 * Banner Class
 */
@customElement(enums.COMPONENT_PREFIX + 'banner')
export class WPBanner extends LitElement {
	static override styles = [CSS_RESETS, bannerCss];

	@property()
		position: BannerPosition = 'bottom';
		
	@property()
		icon?: string;

	@property({ attribute: true, type: Boolean })
		cancellable?: boolean;

	@state()
		isClosed = false;

	toggle(type?: string) {
		if (type) {
			const ev = new CustomEvent('wp-banner-' + type);
			window.dispatchEvent(ev);
		}
		this.isClosed = !this.isClosed;
	}

	confirm() {
		this.toggle('confirm');
	}

	cancel() {
		this.toggle('cancel');
	}

	render() {
		return when(
			!this.isClosed,
			() => html`
				<div id="banner">
					<slot></slot>
					<nav id="response-row">
						<button @click=${this.confirm}>✓</button>
						${this.cancellable ? html`<button @click=${this.cancel}>X</button>` : html``}
					</nav>
				</div>
			`,
			() => html``
		);
	}
}
