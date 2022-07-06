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

@customElement(Enums.default.COMPONENT_PREFIX + 'txt')
export class WPTxt extends LitElement {

	@property() size: TxtSectionBaseSize = 'md';

	static override styles = [txtCSS];

	override render() {

		return html`
			<p class="wp-txt-${this.size}">
				<slot></slot>
			</p>
		`;
	}
}


@customElement(Enums.default.COMPONENT_PREFIX + 'hdr')
export class WPHdr extends LitElement {

	static override styles = [txtCSS];

	override render() {

		return html`
			<header>
				<slot></slot>
			</header>
		`;
	}
}
