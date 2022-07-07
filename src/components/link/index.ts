import {
	customElement,
	LitElement,
	Enums,
	html,
	property,
	classMap,
	when,
} from '../../globals';
import { LINK_STYLES, CSS_VARS } from './link.css';

@customElement(Enums.default.COMPONENT_PREFIX + 'link')
export class WPLink extends LitElement {

	@property({ attribute: true, type: String }) href: string = '#';
	@property({ attribute: true, type: String }) text: string = '';

	static override styles = [CSS_VARS, LINK_STYLES];
	render() {
		return html`
		<a href="${this.href}">${this.text}</a>
		`;
	}
}
