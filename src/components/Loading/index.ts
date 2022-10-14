import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import loadingCSS from './style.css';

@customElement(enums.COMPONENT_PREFIX + 'loading')
export class WPLoading extends LitElement {
	static styles = [CSS_RESETS, loadingCSS];

	@property()
		icon_url: string;

	@property({ type: Boolean })
		reverse = false;

	@property()
		speed: 'normal' | 'slow' = 'normal';

	render() {
		const base_class = this.reverse ? 'wp-loading-reverse' : 'wp-loading';
		return html`
			<img
				class="${base_class} wp-loading--${this.speed}"
				src=${this.icon_url}
				alt="&#9676;"
			/>
		`;
	}
}
