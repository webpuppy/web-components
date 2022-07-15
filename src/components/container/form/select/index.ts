import select_css from './style.css';
import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
    classMap,
    when,
	CSS_RESETS
} from '../../../../globals';

@customElement(Enums.default.COMPONENT_PREFIX + 'text-select')
export class WPTextSelect extends LitElement {

	static styles = [CSS_RESETS, select_css];


	render() {
		return html``;
	}
}
