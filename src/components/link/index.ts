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

    render() {
		if(this.hov_underline) {
			return html`<a
				href=${this.href}
				target=${this.target}
				class="wp-link wp-link--hov-underline"
			>${this.text}</a> `;
		}

    	return html`<a
			class="wp-link"
			href=${this.href}
			target=${this.target}
		>${this.text}</a> `;
    }
}
