import {
    Enums,
    when,
	state,
	CSS_RESETS,
} from '../../globals/exports';
import {
	customElement,
    LitElement,
    html,
    property,
} from 'lit-exports';
import style from './sidebar-menu.css';
/**
 * Sidebar Menu
 */
@customElement(Enums.default.COMPONENT_PREFIX + 'sidebar-menu-item')
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
