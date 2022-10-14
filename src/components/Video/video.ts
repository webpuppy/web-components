import { enums, WPSizeable } from '../../globals/exports';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';

const NOT_SUPPORTED_MSG = 'Browser Video Not Supported';

@customElement(enums.COMPONENT_PREFIX + 'video')
export class WPVideo extends WPSizeable {
	@property()
		type: string;

	@property()
		src: string;

	@property({ type: Boolean, attribute: true })
		controls = true;

	render() {
		if (this.size === 'xs') {
			return html`
				<video width="180" ?controls=${this.controls}>
					<source src=${this.src} type=${this.type} />
					${NOT_SUPPORTED_MSG}
				</video>
			`;
		}
		if (this.size === 'sm') {
			return html`
				<video width="360" ?controls=${this.controls}>
					<source src=${this.src} type=${this.type} />
					${NOT_SUPPORTED_MSG}
				</video>
			`;
		}

		if (this.size === 'xl') {
			return html`
				<video width="1920" ?controls=${this.controls}>
					<source src=${this.src} type=${this.type} />
					${NOT_SUPPORTED_MSG}
				</video>
			`;
		}

		return html`
			<video width="720" ?controls=${this.controls}>
				<source src=${this.src} type=${this.type} />
				${NOT_SUPPORTED_MSG}
			</video>
		`;
	}
}
