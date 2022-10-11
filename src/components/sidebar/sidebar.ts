import { CSSResultGroup } from 'lit';
import { enums, CSS_RESETS } from '../../globals/exports';
import {
	customElement,
	property,
	state,
	query,
	queryAssignedElements,
} from 'lit/decorators.js';
import { LitElement, html } from 'lit';
import { when } from 'lit/directives/when.js';
import { map } from 'lit/directives/map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import style from './sidebar.css';

@customElement(enums.COMPONENT_PREFIX + 'sidebar')
export class WPSidebar extends LitElement {
	static override styles?: CSSResultGroup = [CSS_RESETS, style];

	@property()
	prefix_href?: string = null;

	@state()
	is_open = false;

	@query('.wp-sbr-burger')
	burger: HTMLElement;

	@queryAssignedElements()
	nav_items: HTMLElement[];

	@property()
	icon_url: '/logo.svg';

	@property()
	title = '';

	@property()
	icon_size = '64';

	render_title() {
		if (!this.title) return html``;
		return html`<h4>${this.title}</h4>`;
	}

	render_drawer() {
		return when(
			this.is_open,
			() => html`
				<div class="drawer">
					<img
						style="padding: 1rem"
						height=${this.icon_size}
						width=${this.icon_size}
						src=${this.icon_url}
					/>
					<button class="close" @click=${this.toggle_drawer}>X</button>
					${map(this.nav_items, i => unsafeHTML(i.outerHTML))}
				</div>
			`,
			() => html``
		);
	}

	toggle_drawer() {
		this.is_open = !this.is_open;
	}

	render_component() {
		if (!this.prefix_href) {
			return html`
				<aside role="navigation" class="wp-sbr">
					<header class="wp-sbr-hdr">
						<img
							height=${this.icon_size}
							width=${this.icon_size}
							src=${this.icon_url}
						/>
						${this.render_title()}
					</header>
					<slot></slot>
				</aside>
				${this.render_drawer()}
			`;
		}
		return html`
			<aside role="navigation" class="wp-sbr">
				<header class="wp-sbr-hdr">
					<button @click=${this.toggle_drawer} class="wp-sbr--burger">☰</button>
					<a class="wp-sbr--icon" href=${this.prefix_href}>
						<img
							height=${this.icon_size}
							width=${this.icon_size}
							src=${this.icon_url}
						/>
						${this.render_title()}
					</a>
				</header>
				<slot></slot>
			</aside>
			${this.render_drawer()}
		`;
	}
	render() {
		return this.render_component();
	}
}
