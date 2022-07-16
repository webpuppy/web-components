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

	@property({ type: Boolean })
	reverse: boolean = false;

	@property()
	speed: 'normal' | 'slow' = 'normal';

	render() {
		const base_class = this.reverse ? 'wp-loading-reverse' : 'wp-loading';
		return html`
		<img class="${base_class} wp-loading--${this.speed}" src=${this.icon_url} alt="&#9676;">
		`;
	}
};
