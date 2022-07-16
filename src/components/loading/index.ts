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
import loadingCSS from './style.css';


@customElement(Enums.default.COMPONENT_PREFIX + 'loading')
export class WPLoading extends LitElement {

	static override styles = [CSS_RESETS, loadingCSS];

	@property()
	icon_url: string;
	render() {
		return html`
		<img class="wp-loading" src=${this.icon_url} alt="&#9676;">
		`;
	}
};
