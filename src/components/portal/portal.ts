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
	WPPortalXLargeWidth,
	WPPortalFetchPriority,
	WPPortalLoadingOption,
	WPPortalRefererPolicy
} from './defs';
import portalCSS from './style.css';

@customElement(Enums.default.COMPONENT_PREFIX + 'portal')
export class WPPortal extends WPSizeable {

	@property()
	src = '/';

	@property()
	name = 'Portal';

	@property()
	fetchPriority: WPPortalFetchPriority = 'auto';

	@property()
	loading: WPPortalLoadingOption = 'eager';

	@property()
	refererPolicy: WPPortalRefererPolicy = 'no-referer-when-downgrade';

	static override styles = [CSS_RESETS, portalCSS];

	render() {
		if(this.size === 'xs') {
			return html`
			<iframe
			aria-label=${this.name}
			loading=${this.loading}
			fetchpriority=${this.fetchPriority}
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
			loading=${this.loading}
			fetchpriority=${this.fetchPriority}
			name=${this.name}
			width=${WPPortalSmallWidth}
			height=${WPPortalSmallHeight}
			src=${this.src}></iframe>
		`;
		}
		if(this.size === 'xl') {
			return html`
			<iframe
			aria-label=${this.name}
			loading=${this.loading}
			fetchpriority=${this.fetchPriority}
			name=${this.name}
			width=${WPPortalXLargeWidth}
			height=${WPPortalXLargeHeight}
			src=${this.src}></iframe>
		`;
		}
		return html`
			<iframe
			aria-label=${this.name}
			loading=${this.loading}
			fetchpriority=${this.fetchPriority}
			name=${this.name}
			width=${WPPortalWidth}
			height=${WPPortalHeight}
			src=${this.src}></iframe>
		`;
	}
}
