import {
    Enums,
	CSS_RESETS,
	WPSizeable
} from '../../globals/exports';
import {
	customElement,
    LitElement,
    html,
    property,
} from 'lit-exports';
import { WPEditableListType } from './defs';
import style from './editable-list.css';

@customElement(Enums.default.COMPONENT_PREFIX + 'editable-list')
export class WPEditableList extends WPSizeable {

	static override styles = [CSS_RESETS, style];

	@property()
	type: WPEditableListType = 'default';

	render() {
		return html`
		<div class="wp-editable-list">
			<slot></slot>
		</div>
		`;
	}
}
