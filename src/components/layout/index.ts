import {
	customElement,
	LitElement,
	Enums,
	html,
	property,
	classMap,
	when,
} from '../../globals/exports';
import { LayoutType } from './defs';

@customElement(Enums.default.COMPONENT_PREFIX + 'layout')
export class WPLayout extends LitElement {

	@property()
	type: LayoutType = 'sidebar-0';

	/**
	 *
	 * todo: setup dynamic grid sizing on children
	 */

	render() {
		return html`
		<div class="wp-layout">
			<header class="wp-layout__hdr">

			</header>
			<main class="wp-layout__main">

			</main>
		</div>
		`;
	}
}
