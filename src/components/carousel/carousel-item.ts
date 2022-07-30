import {
    Enums,
	CSS_RESETS
} from '../../globals/exports';
import {
	customElement,
    LitElement,
    html,
    property,
} from 'lit-exports';
import style from './carousel-item.css';
@customElement(Enums.default.COMPONENT_PREFIX + 'carousel-item')
export class WPCarouselItem extends LitElement {
	static override styles = [CSS_RESETS, style];
	render() {
		return html`
		<div class="wp-carousel-item">
			<slot></slot>
		</div>
		`;
	}
}
