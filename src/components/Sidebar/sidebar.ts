import { LitElement, html, CSSResultGroup } from 'lit';
import { enums, CSS_RESETS } from '../../globals/exports';
import {
	customElement,
	property,
	state,
	query,
	queryAssignedElements
} from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { map } from 'lit/directives/map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import style from './sidebar.css';

const SIDEBAR_CLASS = 'wp-sbr';

@customElement(enums.COMPONENT_PREFIX + 'sidebar')
export class WPSidebar extends LitElement {
	static override styles?: CSSResultGroup = [CSS_RESETS, style];

	@property()
		prefix_href?: string = null;

	@state()
		is_open = false;

	// @query(`.${SIDEBAR_CLASS}-burger`)
	// 	burger: HTMLElement;

	// @queryAssignedElements()
	// 	nav_items: HTMLElement[];

	@property()
		icon: '/logo.svg';

	@property()
		title = '';

	@property()
		iconSize = '64';

	@property()
		iconAlt = '';

	render_title() {
		if (!this.title) return html``;
		return html`<h4>${this.title}</h4>`;
	}

	// render_drawer() {
	// 	return when(
	// 		this.is_open,
	// 		() => html`
	// 			<div class="drawer">
	// 				<img
	// 					style="padding: 1rem"
	// 					height=${this.iconSize}
	// 					width=${this.iconSize}
	// 					src=${this.icon}
	// 					alt=${this.iconAlt}
	// 				/>
	// 				<button class="close" @click=${this.toggle_drawer}>X</button>
	// 				${map(this.nav_items, i => unsafeHTML(i.outerHTML))}
	// 			</div>
	// 		`,
	// 		() => html``
	// 	);
	// }

	toggle_drawer() {
		this.is_open = !this.is_open;
	}

	render_component() {
		if (!this.prefix_href) {
			return html`
				<aside role="navigation" class=${SIDEBAR_CLASS}>
					<header class="${SIDEBAR_CLASS}-hdr">
						<img
							height=${this.iconSize}
							width=${this.iconSize}
							src=${this.icon}
							alt=${this.iconAlt}
							loading="lazy" />
						${this.render_title()}
					</header>
					<slot></slot>
				</aside>
			`;
		}
		return html`
			<aside role="navigation" class=${SIDEBAR_CLASS}>
				<header class="${SIDEBAR_CLASS}-hdr">
					<button @click=${this.toggle_drawer} class="${SIDEBAR_CLASS}--burger">☰</button>
					<a class="${SIDEBAR_CLASS}--icon" href=${this.prefix_href}>
						<img
							height=${this.iconSize}
							width=${this.iconSize}
							src=${this.icon}
							alt=${this.iconAlt}
							loading="lazy" />
						${this.render_title()}
					</a>
				</header>
				<slot></slot>
			</aside>
		`;
	}
	render() {
		return this.render_component();
	}
}
