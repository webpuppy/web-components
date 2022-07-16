import { CSSResultGroup } from 'lit';
import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
    when,
	state,
	query,
	queryAssignedElements,
	CSS_RESETS,
} from '../../../globals';
import css, { WP_SIDEBAR_ITEM } from './style.css';

@customElement(Enums.default.COMPONENT_PREFIX + 'sidebar-item')
export class WPSidebarItem extends LitElement {

	static override styles?: CSSResultGroup = [CSS_RESETS, WP_SIDEBAR_ITEM];

	@property({ attribute: true })
	href?: string;

	@property()
	text: string = '';

	@property({ attribute: false })
	is_active: boolean = window.location.pathname === this.href;

	constructor() {
		super();
		window.addEventListener('DOMContentLoaded', () => this.is_active = window.location.pathname === this.href);
	}
	render_component() {
		if(this.is_active) {
			return html`
			<a class="wp-sbr-item wp-sbr-item--active" href=${this.href}>${this.text}</a>
			`;
		}
		return html`
			<a class="wp-sbr-item" href=${this.href}>${this.text}</a>
		`;
	}

	render() {
		return this.render_component();
	}
}

@customElement(Enums.default.COMPONENT_PREFIX + 'sidebar')
export class WPSidebar extends LitElement {

	static override styles?: CSSResultGroup = [CSS_RESETS, css];

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
	title: string = '';

	render_title() {
		if(!this.title) return html``;
		return html`<h4>${this.title}</h4>`;
	}
	render_component() {
		if(!this.prefix_href) {
			return html`
			<aside class="wp-sbr">
				<header class="wp-sbr-hdr">
					<img height="64"
						width="64" src=${this.icon_url}>
					${this.render_title()}
				</header>
				<slot></slot>
			</aside>
			`;
		}
		return html`
			<aside class="wp-sbr">
				<header class="wp-sbr-hdr">
					<a href=${this.prefix_href}>
						<img height="64"
							width="64" src=${this.icon_url}>
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
};
