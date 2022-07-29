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
import {
	WPPortalXSmallHeight,
	WPPortalXSmallWidth,
	WPPortalSmallHeight,
	WPPortalSmallWidth,
	WPPortalHeight,
	WPPortalWidth,
	WPPortalXLargeHeight,
	WPPortalXLargeWidth
} from './defs';
import portalCSS from './style.css';

@customElement(Enums.default.COMPONENT_PREFIX + 'portal')
export class WPPortal extends WPSizeable {

	@property()
	src = '/';

	@property()
	name = 'Portal';

	static override styles = [CSS_RESETS, portalCSS];

	render() {
		if(this.size === 'xs') {
			return html`
			<iframe
			aria-label=${this.name}
			name=${this.name}
			width=${WPPortalXSmallWidth}
			height=${WPPortalXSmallHeight}
			src=${this.src}></iframe>
		`;
		}
		if(this.size === 'sm') {
			return html`
			<iframe
			aria-label=${this.name}
			name=${this.name}
			width=${WPPortalSmallWidth}
			height=${WPPortalSmallHeight}
			src=${this.src}></iframe>
		`;
		}
		if(this.size === 'xl') {
			return html`
			<iframe aria-label=${this.name}
			name=${this.name}
			width=${WPPortalXLargeWidth}
			height=${WPPortalXLargeHeight}
			src=${this.src}></iframe>
		`;
		}
		return html`
			<iframe
			aria-label=${this.name}
			name=${this.name}
			width=${WPPortalWidth}
			height=${WPPortalHeight}
			src=${this.src}></iframe>
		`;
	}
}
