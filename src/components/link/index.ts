import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
    classMap,
    when,
	CSS_RESETS
} from '../../globals';
import { LINK_STYLES } from './style.css';
import { LinkTarget } from './defs';
@customElement(Enums.default.COMPONENT_PREFIX + 'link')
export class WPLink extends LitElement {

	@property({ attribute: true, type: Boolean })
	hov_underline = false;

	@property({ attribute: true, type: String })
	target: LinkTarget = '_self';

    @property({ attribute: true, type: String })
	href: string = '#';

    @property({ attribute: true, type: String })
	text: string = '';

    static override styles = [CSS_RESETS, LINK_STYLES];

	render_component(classes: string) {
		if(this.target === '_blank') {
			return html`<a
			class=${classes}
			href=${this.href}
			target=${this.target}
			>${this.text}&#x2197;</a> `;
		}
		return html`<a
		class=${classes}
		href=${this.href}
		target=${this.target}
		>${this.text}</a> `;
	}

    render() {
		if(this.hov_underline) {
			return this.render_component('wp-link wp-link--underline');
		}

    	return this.render_component('wp-link')
    }
}
