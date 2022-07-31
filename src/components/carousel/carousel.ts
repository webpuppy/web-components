import {
    Enums,
	CSS_RESETS,
	WPSizeable
} from '../../globals/exports';
import {
	customElement,
    html,
    property,
	live,
	query,
	queryAssignedElements,
	state,
	unsafeHTML,
	when
} from 'lit-exports';
import style from './carousel.css';
import { WPCarouselItem } from './carousel-item';
@customElement(Enums.default.COMPONENT_PREFIX + 'carousel')
export class WPCarousel extends WPSizeable {

	static override styles = [CSS_RESETS, style];

	@query('.wp-carousel')
	container: HTMLDivElement;

	@query('.wp-carousel-slide')
	slide: HTMLDivElement;

	@queryAssignedElements({ selector: 'wp-carousel-item' })
	carousel_items: WPCarouselItem[];

	@state()
	selected: WPCarouselItem;

	@state()
	selectedIndex = 0;

	connectedCallback() {
		super.connectedCallback();
		document.addEventListener('DOMContentLoaded', () => {
			if(this.carousel_items.length > 0) {
				this.__trigger();
				this.carousel_items.forEach((item, idx) => {
					item.addEventListener('click', _ => {
						this.selectedIndex = idx;
						this.__trigger();
					});
				});
			}
		});
	}

	decrement() {
		const ev = new CustomEvent('wp-carousel-back');
		document.dispatchEvent(ev);
		if(this.selectedIndex === 0) {
			this.selectedIndex = this.carousel_items.length - 1;
			this.__trigger();
			return;
		}
		this.selectedIndex = this.selectedIndex-1;
		this.__trigger();
		return;
	}

	increment() {
		const ev = new CustomEvent('wp-carousel-next');
		document.dispatchEvent(ev);
		if(this.selectedIndex < this.carousel_items.length-1) {
			this.selectedIndex = this.selectedIndex+1;
			this.__trigger();
			return;
		}

		this.selectedIndex = 0;
		this.__trigger();
		return;
	}

	__trigger() {
		this.selected = [...this.carousel_items][this.selectedIndex];
		this.slide.classList.add('wp-carousel-slide--active');
		setTimeout(() => this.slide.classList.remove('wp-carousel-slide--active'), 350);
	}

	render() {
		return html`
		<button @click=${() => this.decrement()} class="wp-slide-controls"><</button>
		<div class="wp-carousel wp-carousel--${this.size}">
			<div class="wp-carousel-slide">
				${when(this.selected, () => html`${unsafeHTML(this.selected.innerHTML)}`, () => `loading..`)}
			</div>
			<div class="wp-carousel-slides">
				<slot></slot>
			</div>
		</div>
		<button @click=${() => this.increment()} class="wp-slide-controls">></button>
		`;
	}
}
