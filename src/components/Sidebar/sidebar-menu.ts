import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import style from './sidebar-menu.css';
/**
 * Sidebar Menu
 */
@customElement(enums.COMPONENT_PREFIX + 'sidebar-menu')
export class WPSidebarMenu extends LitElement {
	static override styles = [CSS_RESETS, style];

	@property()
		name: string;

	@property()
		section_href = '/';

	@property({ type: Boolean })
		nodropdown = false;

	@state()
		is_open = false;

	toggle() {
		this.is_open = !this.is_open;
	}

	render() {
		if (this.nodropdown) {
			return html`
				<div class="wp-sidebar-menu">
					<a class="wp-sidebar-menu__title" href=${this.section_href}
						>${this.name}</a
					>
					<div class="wp-sidebar-menu__wrapper">
						<slot></slot>
					</div>
				</div>
			`;
		}
		return when(
			this.is_open,
			() => html`
				<div class="wp-sidebar-menu">
					<span>
						<a class="wp-sidebar-menu__title" href=${this.section_href}
							>${this.name}</a
						><button @click=${this.toggle}>
							&#752;
						</button>
					</span>
					<div class="wp-sidebar-menu__wrapper">
						<slot></slot>
					</div>
				</div>
			`,
			() => html`
				<div class="wp-sidebar-menu">
					<span>
						<a class="wp-sidebar-menu__title" href=${this.section_href}
							>${this.name}</a
						><button @click=${this.toggle}>
							&#709;
						</button>
					</span>
				</div>
			`
		);
	}
}
