import { enums, WPComponentBase, CSS_RESETS } from '../../globals/exports';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import ddlItemStyles from './dropdown-item.css';

@customElement(enums.COMPONENT_PREFIX + 'dropdown-item')
export class WPDropdownItem extends WPComponentBase {
	@property()
		value: string;

	static override styles = [CSS_RESETS, ddlItemStyles];

	render() {
		return html`<div class="wp-dropdown-item">${this.value}<slot></slot></div>`;
	}
}
