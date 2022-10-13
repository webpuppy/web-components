import { enums, CSS_RESETS } from '../../globals/exports';
import {
	customElement,
	state,
	property,
	queryAssignedElements,
} from 'lit/decorators.js';
import { LitElement, html } from 'lit';
import { WPEditableListType, WPEditableListState } from './defs';
import { WPEditableListItem } from './editable-list-item';
import style from './editable-list.css';

@customElement(enums.COMPONENT_PREFIX + 'editable-list')
export class WPEditableList extends LitElement {
	static override styles = [CSS_RESETS, style];

	@property()
		type: WPEditableListType = 'default';

	// @queryAssignedElements({ selector: 'wp-editable-list-item' })
	// 	_list_items: WPEditableListItem[];

	@state()
		_list_state: WPEditableListState = 'initial';

	render() {
		if (this.type === 'grid') {
			return html`
				<div class="wp-editable-grid">
					<slot></slot>
				</div>
			`;
		}
		return html`
			<div class="wp-editable-list">
				<slot></slot>
			</div>
		`;
	}
}
