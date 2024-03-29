import { enums, CSS_RESETS, WPOpenable } from '../../globals/exports';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './nav.css';

const NAV_CLASS = 'wp-nav';

/**
 * @since 0.0.0
 *
 * @version 0.0.1
 *
 * Defines prestyled top navbar
 *
 * @param name - title of navbar to display
 * @param prefixHref - anchor tag link for the far left logo (default /)
 * @param icon - icon url for far left anchor
 * @param iconAlt - alt text for icon
 */
@customElement(enums.COMPONENT_PREFIX + 'nav')
export class WPNav extends WPOpenable {
	static override styles = [CSS_RESETS, styles];

	@property()
		name = 'webpuppy.io';

	@property({ attribute: 'prefix-href' })
		prefixHref?: string = null;

	@property()
		icon = '/logo.svg';

	@property({ attribute: 'icon-alt' })
		iconAlt = 'logo';

	// @query(`.${NAV_CLASS}`)
	// 	container: HTMLElement;

	// @query(`.${NAV_CLASS}-burger`)
	// 	burger: HTMLElement;

	// @queryAssignedElements()
	// 	nav_items: HTMLElement[];

	// connectedCallback() {
	// 	super.connectedCallback();
	// 	window.addEventListener('scroll', () => {
	// 		if (window.scrollY > 0) {
	// 			this.container.classList.add(NAV_CLASS + '--scrolled');
	// 			// this.nav_items.forEach(item => item.classList.add('wp-nav-item--scrolled'));
	// 			return;
	// 		}
	// 		this.container.classList.remove(NAV_CLASS + '--scrolled');
	// 	});
	// }

	toggleOpen() {
		this.toggleDrawer();
	}

	toggleDrawer() {
		this.is_open = !this.is_open;
	}

	onKeyPress(e: KeyboardEvent) {
		console.log(e);
	}

	// renderDrawer() {
	// 	return when(
	// 		this.is_open,
	// 		() => html`
	// 			<div class="drawer">
	// 				<img
	// 					width="64"
	// 					height="64"
	// 					style="padding: 1rem"
	// 					src=${this.icon}
	// 					alt=${this.iconAlt}
	// 				/>
	// 				<button class="close" @click=${this.toggleDrawer}>X</button>
	// 				${map(this.nav_items, i => unsafeHTML(i.outerHTML))}
	// 			</div>
	// 		`,
	// 		() => html``
	// 	);
	// }

	// ${this.renderDrawer()}
	// render_mobile_open() {
	// 	return html`
	// 		<header role="navigation" class=${NAV_CLASS}>
	// 			<div class="${NAV_CLASS}-logo">
	// 				<a href=${this.prefix_href ?? '/'}>
	// 					<img src=${this.icon} alt="hdr" height="64" width="64" />
	// 					<span> ${this.name} </span>
	// 				</a>
	// 			</div>
	// 			<div role="list" class="${NAV_CLASS}-list--mobile-open">
	// 				<slot></slot>
	// 			</div>
	// 			<div class="${NAV_CLASS}-burger" @keypress=${this.onKeyPress} @click=${this.toggleOpen}></div>
	// 		</header>
	// 	`;
	// }

	render() {
		return html`
			<header role="navigation" class=${NAV_CLASS}>
				<div class="${NAV_CLASS}-logo">
					<a id="masthead" href=${this.prefixHref ?? '/'}>
						<img src=${this.icon} alt="hdr icon" height="64" width="64" />&nbsp;
						${this.name && html`<div>${this.name}</div>`}
					</a>
				</div>
				<div class="${NAV_CLASS}-list">
					<slot></slot>
				</div>
				<div
					class="${NAV_CLASS}-burger"
					@keypress=${this.onKeyPress}
					@click=${this.toggleOpen}></div>
			</header>
		`;
	}
}
