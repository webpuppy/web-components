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
import css from './style.css';

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
	title: string = 'WebPuppy';

	render_component() {
		if(!this.prefix_href) {
			return html`
			<aside class="wp-sbr">
				<header class="wp-sbr-hdr">
					<img height="64"
						width="64" src=${this.icon_url}>
					<h4>${this.title}</h4>
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
						<h4>${this.title}</h4>
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
