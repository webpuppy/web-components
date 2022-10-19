import { enums, CSS_RESETS, WPSizeable } from '../../globals/exports';
import { customElement, state, query, queryAssignedElements } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import style from './carousel.css';
import { WPCarouselItem } from './carousel-item';

/**
 * Carousel Component
 */
@customElement(enums.COMPONENT_PREFIX + 'carousel')
export class WPCarousel extends WPSizeable {
	static override styles = [CSS_RESETS, style];

	// @query('.wp-carousel')
	// 	container: HTMLDivElement;

	// @query('.wp-carousel-slide')
	// 	slide: HTMLDivElement;

	// @queryAssignedElements({ selector: 'wp-carousel-item' })
	// 	carouselItems: WPCarouselItem[];

	@state()
		selected: WPCarouselItem;

	@state()
		selectedIndex = 0;

	// connectedCallback() {
	// 	super.connectedCallback();
	// 	document.addEventListener('DOMContentLoaded', () => {
	// 		if (this.carouselItems.length > 0) {
	// 			this.__trigger();
	// 			this.carouselItems.forEach((item, idx) => {
	// 				item.addEventListener('click', () => {
	// 					this.selectedIndex = idx;
	// 					this.__trigger();
	// 				});
	// 			});
	// 		}
	// 	});
	// }

	// decrement() {
	// 	const ev = new CustomEvent('wp-carousel-back');
	// 	document.dispatchEvent(ev);
	// 	if (this.selectedIndex === 0) {
	// 		this.selectedIndex = this.carouselItems.length - 1;
	// 		this.__trigger();
	// 		return;
	// 	}
	// 	this.selectedIndex = this.selectedIndex - 1;
	// 	this.__trigger();
	// 	return;
	// }

	// increment() {
	// 	const ev = new CustomEvent('wp-carousel-next');
	// 	document.dispatchEvent(ev);
	// 	if (this.selectedIndex < this.carouselItems.length - 1) {
	// 		this.selectedIndex = this.selectedIndex + 1;
	// 		this.__trigger();
	// 		return;
	// 	}

	// 	this.selectedIndex = 0;
	// 	this.__trigger();
	// 	return;
	// }

	// __trigger() {
	// 	this.selected = [...this.carouselItems][this.selectedIndex];
	// 	this.slide.classList.add('wp-carousel-slide--active');
	// 	setTimeout(
	// 		() => this.slide.classList.remove('wp-carousel-slide--active'),
	// 		350
	// 	);
	// }

	// render() {
	// 	return html`
	// 		<button @click=${this.decrement} class="wp-slide-controls">
	// 			&lt;
	// 		</button>
	// 		<div class="wp-carousel wp-carousel--${this.size}">
	// 			<div class="wp-carousel-slide">
	// 				${when(
	// 	this.selected,
	// 	() => html`${unsafeHTML(this.selected.innerHTML)}`,
	// 	() => 'loading..'
	// )}
	// 			</div>
	// 			<div class="wp-carousel-slides">
	// 				<slot></slot>
	// 			</div>
	// 		</div>
	// 		<button @click=${this.increment} class="wp-slide-controls">
	// 			&gt;
	// 		</button>
	// 	`;
	// }
}
