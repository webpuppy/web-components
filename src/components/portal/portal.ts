import {
    Enums,
	WPSizeable,
	CSS_RESETS
} from '../../globals/exports';
import {
	customElement,
    html,
    property,
} from 'lit-exports';
import portalCSS from './style.css';

@customElement(Enums.default.COMPONENT_PREFIX + 'portal')
export class WPPortal extends WPSizeable {

	@property()
	src: string;

	static override styles = [CSS_RESETS, portalCSS];

	render() {
		if(this.size === 'xs') {
			return html`
			<iframe width="180" height="360" src=${this.src}></iframe>
		`;
		}
		if(this.size === 'sm') {
			return html`
			<iframe width="360" height="360" src=${this.src}></iframe>
		`;
		}
		if(this.size === 'xl') {
			return html`
			<iframe width="1920" height="1080" src=${this.src}></iframe>
		`;
		}
		return html`
			<iframe width="720" height="540" src=${this.src}></iframe>
		`;
	}
}
