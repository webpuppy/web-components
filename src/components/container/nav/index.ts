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
import { NAV_STYLES } from './style.css';
import { TopNavType } from './defs';
@customElement(Enums.default.COMPONENT_PREFIX + 'nav')
export class WPNav extends LitElement {

	static override styles = [CSS_RESETS, NAV_STYLES];

	@state()
	is_open = false;

	@property({ attribute: true, type: Boolean })
	fixed: Boolean = false;

	@property()
	type: TopNavType = 'flexed-burger';

	@property()
	title: string = 'WebPuppy';

	@property()
	prefix_href?: string = null;

	@property()
	icon_url: '/logo.svg';

	@query('.wp-nav-burger')
	burger: HTMLElement;

	@queryAssignedElements()
	nav_items: HTMLElement[];

	toggle_open() {
		this.is_open = !this.is_open;
	}


	render_default(classes: string) {
		return html`
		<header class=${classes}>
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
			<div class="wp-nav-burger" @click=${this.toggle_open}></div>
		</header>
		`;
	}

	render_mobile_open(classes: string) {
		return html`
		<header class=${classes}>
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
			<div class="wp-nav-list--mobile-open">
				<slot></slot>
			</div>
			<div class="wp-nav-burger" @click=${this.toggle_open}></div>
		</header>
		`;
	}

	render() {
		const classes = this.fixed ? 'wp-nav wp-nav--fixed' : 'wp-nav';
		return when(this.is_open, () => this.render_mobile_open(classes), () => this.render_default(classes));
	}
};
