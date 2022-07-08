import {
	customElement,
	LitElement,
	Enums,
	html,
	property,
	classMap,
	when,
} from '../../globals/exports';
import { DEFAULT_LAYOUT_STYLES } from './layout.css';
import { LayoutType } from './defs';


@customElement(Enums.default.COMPONENT_PREFIX + 'layout')
export class WPLayout extends LitElement {

	@property()
	type: LayoutType = 'sidebar-0';

	static override styles = DEFAULT_LAYOUT_STYLES;

	private _convertTypeToClass() {
		switch(this.type) {
			case 'topbar-0':
				return 'wp-layout-tbr-0';
			case 'topbar-1':
				return 'wp-layout-tbr-1';
			case 'sidebar-1':
				return 'wp-layout-sbr-1';
			default:
				return 'wp-layout-sbr-0';
		}
	}
	/**
	 *
	 * todo: setup dynamic grid sizing on children
	 */

	render() {
		return html`
		<div class="${this._convertTypeToClass()}">
			<header class="wp-layout__hdr">
				<slot></slot>
			</header>
			<main class="wp-layout__main">
				<slot></slot>
			</main>
		</div>
		`;
	}
}
