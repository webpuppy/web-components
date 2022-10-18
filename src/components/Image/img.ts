import styles from './style.css';
import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * @attribute figure - boolean if in `<figure>` container
 * @attribute caption - caption for figure container
 * @attribute height - height to render
 * @attribute width - width to render
 * @attribute src - src of the image
 * @attribute alt - alt text if load fails
 * @attribute lazy - bool for lazy load
 * Image Wrapper
 */
@customElement(enums.COMPONENT_PREFIX + 'img')
export class WPImg extends LitElement {
	static override styles = [CSS_RESETS, styles];

	@property({ attribute: true, type: Boolean })
		figure? = false;

	@property({ attribute: true })
		caption?: string = null;

	@property({ attribute: true, type: Number })
		height = 128;

	@property({ attribute: true, type: Number })
		width = 128;

	@property()
		src = '';

	@property()
		alt = '';

	@property({ type: Boolean })
		lazy? = false;

	renderPlain() {
		return html`
			<img
				height=${this.height}
				width=${this.width}
				src=${this.src}
				alt=${this.alt}
				loading=${this.lazy ? 'lazy' : 'eager'}
			/>
		`;
	}

	renderFigure() {
		return html`
			<figure>
				${this.renderPlain()}
				<figcaption>${this.caption}</figcaption>
			</figure>
		`;
	}

	render() {
		if (this.caption || this.figure) {
			return this.renderFigure();
		}
		return this.renderPlain();
	}
}
