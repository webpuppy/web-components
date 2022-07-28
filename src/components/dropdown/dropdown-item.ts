import {
    Enums,
	WPComponentBase,
	CSS_RESETS
} from '../../globals/exports';
import {
	customElement,
    html,
    property,
} from 'lit-exports';
import { ddlItemStyles } from './style.css';
@customElement(Enums.default.COMPONENT_PREFIX + 'dropdown-item')
export class WPDropdownItem extends WPComponentBase {

	@property()
	value: string;

	static override styles = [CSS_RESETS, ddlItemStyles];

	render() {
		return html`
		<div class="wp-dropdown-item">${this.value}<slot></slot></div>`;
	}
}
