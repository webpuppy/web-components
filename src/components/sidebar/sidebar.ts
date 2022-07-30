import { CSSResultGroup } from 'lit';
import {
    Enums,
	state,
	query,
	queryAssignedElements,
	CSS_RESETS,
} from '../../globals/exports';
import {
	customElement,
    LitElement,
    html,
    property
} from 'lit-exports';
import style from './sidebar.css';

@customElement(Enums.default.COMPONENT_PREFIX + 'sidebar')
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
		if(!this.title) return html``;
		return html`<h4>${this.title}</h4>`;
	}
	render_component() {
		if(!this.prefix_href) {
			return html`
			<aside role="navigation" class="wp-sbr">
				<header class="wp-sbr-hdr">
					<img height=${this.icon_size}
						width=${this.icon_size} src=${this.icon_url}>
					${this.render_title()}
				</header>
				<slot></slot>
			</aside>
			`;
		}
		return html`
			<aside role="navigation" class="wp-sbr">
				<header class="wp-sbr-hdr">
					<a href=${this.prefix_href}>
						<img height=${this.icon_size}
							width=${this.icon_size} src=${this.icon_url}>
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
