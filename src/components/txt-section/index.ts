import txtCSS from './txt.css';
import {
	customElement,
	LitElement,
	Enums,
	html,
	property,
	classMap,
	when,
} from '../../globals/exports';
import { TxtSectionBaseSize } from './defs';

@customElement(Enums.default.COMPONENT_PREFIX + 'text-content')
export class WPTxt extends LitElement {

	static override styles = [txtCSS];

	override render() {

		return html`
			<p>
				<slot></slot>
			</p>
		`;
	}
}

