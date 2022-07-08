import txtCSS, { TAG_STYLES, BASE_COLORS } from './txt.css';
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

	static override styles = [BASE_COLORS, txtCSS];

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

	static override styles = [BASE_COLORS, txtCSS];

	override render() {

		return html`
			<header>
				<slot></slot>
			</header>
		`;
	}
}
@customElement(Enums.default.COMPONENT_PREFIX + 'tag')
export class WPTag extends LitElement {

	static override styles = [TAG_STYLES, txtCSS];
	@property() size: TxtSectionBaseSize = 'md';
	@property() href?: string;

	override render() {
		if(this.href) {
			return html`
			<a href="wp-tag-${this.size}">
				<slot></slot>
			</a>
			`;
		}
		return html`
			<span class="wp-tag-${this.size}">
				<slot></slot>
			</span>
		`;
	}
}
