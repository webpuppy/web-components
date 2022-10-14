import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './editable-list-item.css';

/**
 * Editable List Item Child
 */
@customElement(enums.COMPONENT_PREFIX + 'editable-list-item')
export class WPEditableListItem extends LitElement {
	static override styles = [CSS_RESETS, style];

	render() {
		return html`
			<div class="wp-editable-list__item">
				<slot></slot>
			</div>
		`;
	}
}
