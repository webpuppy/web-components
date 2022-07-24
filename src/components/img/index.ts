import { DEFAULT_IMG_STYLES } from './style.css';
import {
	customElement,
    LitElement,
    html,
    property,
} from 'lit-exports';
import {
    Enums,
	CSS_RESETS
} from '../../globals/exports';

@customElement(Enums.default.COMPONENT_PREFIX + 'img')
export class WPImg extends LitElement {

	static override styles = [CSS_RESETS, DEFAULT_IMG_STYLES];

	@property({ attribute: true, type: Boolean })
	figure? = false;

	@property({ attribute: true })
	caption?: string = null;

	@property({ attribute: true, type: Number })
	height = 128;

	@property({ attribute: true, type: Number })
	width = 128;

	@property()
	src: string = '/logo.svg';

	@property()
	alt: string = '';

	render_plain_image() {
		return html`
		<img class="wp-img" height=${this.height} width=${this.width} src="${this.src}" alt=${this.alt}>
		`
	}

	render_figure() {
		return html`
		<figure>
			${this.render_plain_image()}
			<figcaption>${this.caption}</figcaption>
		</figure>
		`
	}
	/**
	 *
	 * todo: setup classmap for sizes
	 */
	render() {
		if(this.caption || this.figure) {
			return this.render_figure();
		}
		return this.render_plain_image();
	}
}
