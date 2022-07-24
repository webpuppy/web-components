import select_css from './style.css';
import {
    Enums,
	CSS_RESETS
} from '../../../globals/exports';
import {
	customElement,
    LitElement,
	html,
} from 'lit-exports';

@customElement(Enums.default.COMPONENT_PREFIX + 'text-select')
export class WPTextSelect extends LitElement {

	static styles = [CSS_RESETS, select_css];

	render() {
		return html``;
	}
}
