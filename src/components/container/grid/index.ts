import GRID_CSS from './style.css';
import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
    classMap,
    when,
	CSS_RESETS
} from '../../../globals/exports';

@customElement(Enums.default.COMPONENT_PREFIX + 'grid')
export class WPGrid extends LitElement {

	static override styles = [CSS_RESETS, GRID_CSS];

	render() {
		return html`<slot></slot>`;
	}
};
