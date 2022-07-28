import {
    Enums,
	WPSizeable
} from '../../globals/exports';
import {
	customElement,
    html,
    property,
} from 'lit-exports';

@customElement(Enums.default.COMPONENT_PREFIX + 'portal')
export class WPPortal extends WPSizeable {

	@property()
	src: string;

	render() {
		if(this.size === 'xs') {
			return html`
			<iframe width="180" src=${this.src}></iframe>
		`;
		}
		if(this.size === 'sm') {
			return html`
			<iframe width="360" src=${this.src}></iframe>
		`;
		}
		if(this.size === 'xl') {
			return html`
			<iframe width="1920" src=${this.src}></iframe>
		`;
		}
		return html`
			<iframe width="720" src=${this.src}></iframe>
		`;
	}
}
