import { DEFAULT_IMG_STYLES } from './img.css';
import { ImgBaseSize } from './defs';
import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
    classMap,
    when,
} from '../../globals';

@customElement(Enums.default.COMPONENT_PREFIX + 'img')
export class WPImg extends LitElement {

	static override styles = [DEFAULT_IMG_STYLES]
	@property()
	size: ImgBaseSize = 'md';

	@property()
	src: string = '/logo.svg';

	@property()
	alt: string = '';

	/**
	 *
	 * todo: setup classmap for sizes
	 */
	render() {
		return html`
		<img src="${this.src}" alt=${this.alt}>
		`;
	}
}
