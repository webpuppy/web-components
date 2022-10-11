import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './sidebar-menu.css';
/**
 * Sidebar Menu
 */
@customElement(enums.COMPONENT_PREFIX + 'sidebar-menu-item')
export class WPSidebarMenuItem extends LitElement {
	static override styles = [CSS_RESETS, style];

	render() {
		return html`
			<div class="wp-sidebar-menu-item">
				<slot></slot>
			</div>
		`;
	}
}
