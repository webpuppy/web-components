import {
    Enums,
	CSS_RESETS
} from '../../globals/exports';
import {
	customElement,
    LitElement,
    html,
	state,
    property,
} from 'lit-exports';
import loadingCSS from './style.css';

@customElement(Enums.default.COMPONENT_PREFIX + 'loading')
export class WPLoading extends LitElement {

	static override styles = [CSS_RESETS, loadingCSS];

	@property()
	icon_url: string;

	@property({ type: Boolean })
	reverse = false;

	@property()
	speed: 'normal' | 'slow' = 'normal';

	render() {
		const base_class = this.reverse ? 'wp-loading-reverse' : 'wp-loading';
		return html`
		<img class="${base_class} wp-loading--${this.speed}" src=${this.icon_url} alt="&#9676;">
		`;
	}
};
