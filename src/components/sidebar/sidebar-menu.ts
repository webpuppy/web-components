import {
    Enums,
    when,
	state,
	query,
	queryAssignedElements,
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
@customElement(Enums.default.COMPONENT_PREFIX + 'sidebar-menu')
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

	render() {
		if(this.nodropdown) {
			return html`
			<div class="wp-sidebar-menu">
				<a class="wp-sidebar-menu__title" href=${this.section_href}>${this.name}</a>
				<div class="wp-sidebar-menu__wrapper">
					<slot></slot>
				</div>
			</div>
			`;
		}
		return when(this.is_open, () => html`
		<div class="wp-sidebar-menu">
			<span>
				<a class="wp-sidebar-menu__title" href=${this.section_href}>${this.name}</a><button @click=${() => this.is_open = !this.is_open}>&#752;</button>
			</span>
			<div class="wp-sidebar-menu__wrapper">
				<slot></slot>
			</div>
		</div>
		`, () => html`
		<div class="wp-sidebar-menu">
			<span>
				<a class="wp-sidebar-menu__title" href=${this.section_href}>${this.name}</a><button @click=${() => this.is_open = !this.is_open}>&#709;</button>
			</span>
		</div>
		`);
	}
}
