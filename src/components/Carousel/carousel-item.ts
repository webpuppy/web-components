import { enums, CSS_RESETS } from '../../globals/exports';
import { customElement } from 'lit/decorators.js';
import style from './carousel-item.css';
import { LitElement, html } from 'lit';
/**
 * Carousel Child item
 */
@customElement(enums.COMPONENT_PREFIX + 'carousel-item')
export class WPCarouselItem extends LitElement {
	static override styles = [CSS_RESETS, style];
	render() {
		return html`
			<div class="wp-carousel-item">
				<slot></slot>
			</div>
		`;
	}
}
