import { enums, CSS_RESETS, WPOpenable } from '../../globals/exports';
import { html } from 'lit';
import { when } from 'lit/directives/when.js';
import { map } from 'lit/directives/map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {
	customElement,
	property,
	query,
	queryAssignedElements,
} from 'lit/decorators.js';
import { NAV_STYLES } from './style.css';
import { TopNavType } from './defs';

@customElement(enums.COMPONENT_PREFIX + 'nav')
export class WPNav extends WPOpenable {
	static override styles = [CSS_RESETS, NAV_STYLES];

	@property()
	type: TopNavType = 'flexed-burger';

	@property()
	name = 'WebPuppy';

	@property()
	prefix_href?: string = null;

	@property()
	icon_url: '/logo.svg';

	@query('.wp-nav')
	container: HTMLElement;

	@query('.wp-nav-burger')
	burger: HTMLElement;

	@queryAssignedElements()
	nav_items: HTMLElement[];

	connectedCallback() {
		super.connectedCallback();
		window.addEventListener('scroll', e => {
			if (window.scrollY > 0) {
				this.container.classList.add('wp-nav--scrolled');
				// this.nav_items.forEach(item => item.classList.add('wp-nav-item--scrolled'));
				return;
			}
			this.container.classList.remove('wp-nav--scrolled');
		});
	}

	toggle_open() {
		this.toggle_drawer();
	}

	toggle_drawer() {
		this.is_open = !this.is_open;
	}

	render_drawer() {
		return when(
			this.is_open,
			() => html`
				<div class="drawer">
					<img
						width="64"
						height="64"
						style="padding: 1rem"
						src=${this.icon_url}
					/>
					<button class="close" @click=${this.toggle_drawer}>X</button>
					${map(this.nav_items, i => unsafeHTML(i.outerHTML))}
				</div>
			`,
			() => html``
		);
	}

	render_default(classes: string) {
		return html`
			<header role="navigation" class=${classes}>
				<div class="wp-nav-logo">
					<a href=${this.prefix_href ?? '/'}>
						<img src=${this.icon_url} alt="hdr icon" height="64" width="64" />
						<span> ${this.name} </span>
					</a>
				</div>
				<div class="wp-nav-list">
					<slot></slot>
				</div>
				<div class="wp-nav-burger" @click=${this.toggle_open}></div>
				${this.render_drawer()}
			</header>
		`;
	}

	render_mobile_open(classes: string) {
		return html`
			<header role="navigation" class=${classes}>
				<div class="wp-nav-logo">
					<a href=${this.prefix_href ?? '/'}>
						<img src=${this.icon_url} alt="hdr icon" height="64" width="64" />
						<span> ${this.name} </span>
					</a>
				</div>
				<div role="list" class="wp-nav-list--mobile-open">
					<slot></slot>
				</div>
				<div class="wp-nav-burger" @click=${this.toggle_open}></div>
			</header>
		`;
	}

	render() {
		const classes = 'wp-nav';
		// return when(this.is_open, () => this.render_mobile_open(classes), () => this.render_default(classes));
		return this.render_default(classes);
	}
}
