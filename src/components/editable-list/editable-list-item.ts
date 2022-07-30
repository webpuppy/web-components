import {
    Enums,
	CSS_RESETS
} from '../../globals/exports';
import {
	customElement,
    LitElement,
    html
} from 'lit-exports';
import style from './editable-list-item.css';

@customElement(Enums.default.COMPONENT_PREFIX + 'editable-list-item')
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
