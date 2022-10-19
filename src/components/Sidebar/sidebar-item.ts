import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from './sidebar-item.css';

@customElement(enums.COMPONENT_PREFIX + 'sidebar-item')
export class WPSidebarItem extends LitElement {
	static styles?: CSSResultGroup = [CSS_RESETS, style];

	@property({ attribute: true })
		href?: string;

	@property()
		text = '';

	@property({ attribute: false })
		is_active: boolean = this.href && window.location.pathname === this.href;

	constructor() {
		super();
		window.addEventListener(
			'DOMContentLoaded',
			() => (this.is_active = window.location.pathname === this.href)
		);
	}
	render_component() {
		if (this.is_active) {
			return html`
				<a class="wp-sbr-item wp-sbr-item--active" href=${this.href}>${this.text}</a>
			`;
		}
		return html` <a class="wp-sbr-item" href=${this.href}>${this.text}</a> `;
	}

	render() {
		return this.render_component();
	}
}
