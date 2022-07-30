import {
    Enums,
	CSS_RESETS,
	WPSizeable
} from '../../globals/exports';
import {
	customElement,
    html,
    property,
} from 'lit-exports';
import style from './carousel.css';

@customElement(Enums.default.COMPONENT_PREFIX + 'carousel')
export class WPCarousel extends WPSizeable {
	static override styles = [CSS_RESETS, style];
	render() {
		return html`
		<div class="wp-carousel">
			<slot></slot>
		</div>
		`;
	}
}
