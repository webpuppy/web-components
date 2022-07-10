import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
    classMap,
    when,
} from '../../../globals/exports';
import { CSS_RESETS } from '../../link/link.css';
import { DEFAULT_HDR_STYLES } from './hdr.css';
import { TopNavType } from './defs';
import { state } from 'lit/decorators';


@customElement(Enums.default.COMPONENT_PREFIX + 'nav')
export class WPNav extends LitElement {

	static override styles = [CSS_RESETS, DEFAULT_HDR_STYLES];
	@property()
	type: TopNavType = 'flexed-burger';

	@property()
	title: string = 'WebPuppy';

	@property()
	prefix_href?: string = null;

	@property()
	icon_url: '/logo.svg';

	connectedCallback(): void {
		super.connectedCallback();
		window.addEventListener('DOMContentLoaded', () => {
			window.addEventListener('resize', () => {
				const mql = window.matchMedia('(max-width: 720px);');
				mql.addEventListener('change', e => {
					console.log(e);
				});
				// console.log(mql.matches);
			});
		});
	}
	// @state()
	// nav_burger_open: false;

	render() {
		return html`
		<header class="wp-nav">
			<div class="wp-nav-logo">
				<a href=${this.prefix_href ?? '/'}>
					<img
					src=${this.icon_url}
					alt="hdr icon"
					height="64"
					width="64">
					<span>
						${this.title}
					</span>
				</a>
			</div>
			<div class="wp-nav-list">
				<slot></slot>
			</div>
			<div class="wp-nav-burger"></div>
		</header>
		`;
	}
};