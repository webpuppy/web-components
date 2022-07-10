import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
    classMap,
    when,
} from '../../globals';
import { LINK_STYLES, CSS_RESETS } from './link.css';
import { LinkTarget } from './defs';

@customElement(Enums.default.COMPONENT_PREFIX + 'link')
export class WPLink extends LitElement {

	@property({ attribute: true, type: String })
	target: LinkTarget = '_self';

    @property({ attribute: true, type: String })
	href: string = '#';

    @property({ attribute: true, type: String })
	text: string = '';

    static override styles = [CSS_RESETS, LINK_STYLES];
    render() {
        return html` <a href="${this.href}" target=${this.target}>${this.text}</a> `;
    }
}
