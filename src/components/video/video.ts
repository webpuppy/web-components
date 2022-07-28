import {
    Enums,
	WPSizeable
} from '../../globals/exports';
import {
	customElement,
    html,
    property,
} from 'lit-exports';

@customElement(Enums.default.COMPONENT_PREFIX + 'video')
export class WPVideo extends WPSizeable {

	@property()
	type: string;

	@property()
	src: string;

	@property({ type: Boolean, attribute: true })
	controls = true;

	render() {
		if(this.size === 'xs') {
			return html`
		<video width="180" ?controls=${this.controls}>
			<source src=${this.src} type=${this.type}>
			Browser Video Not Supported.
		</video>
		`;
		}
		if(this.size === 'sm') {
			return html`
		<video width="360" ?controls=${this.controls}>
			<source src=${this.src} type=${this.type}>
			Browser Video Not Supported.
		</video>
		`;
		}

		if(this.size === 'xl') {
			return html`
		<video width="1920" ?controls=${this.controls}>
			<source src=${this.src} type=${this.type}>
			Browser Video Not Supported.
		</video>
		`;
		}

		return html`
		<video width="720" ?controls=${this.controls}>
			<source src=${this.src} type=${this.type}>
			Browser Video Not Supported.
		</video>
		`;
	}
}
