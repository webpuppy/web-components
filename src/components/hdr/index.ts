import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
    classMap,
    when,
} from '../../globals/exports';
import { CSS_RESETS } from '../link/link.css';
import { DEFAULT_HDR_STYLES } from './hdr.css';
import { TopNavType } from './defs';


@customElement(Enums.default.COMPONENT_PREFIX + 'nav')
export class WPNav extends LitElement {

	static override styles = [CSS_RESETS, DEFAULT_HDR_STYLES];
	@property()
	type: TopNavType = 'flexed-burger';

	@property()
	prefix_href?: string = null;

	@property()
	icon_url: 'http://localhost:8000/logo.svg';

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
				</a>
			</div>
			<div class="wp-nav-list">
				<slot></slot>
			</div>
		</header>
		`;
	}
};
