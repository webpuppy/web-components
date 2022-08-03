import {
    Enums,
	WPSizeableOption,
	CSS_RESETS,
	WPComponentBase
} from '../../globals/exports';
import {
	customElement,
    html,
    property,
	ifDefined,
	query,
	live
} from 'lit-exports';
import {
	WPPortalXSmallHeight,
	WPPortalXSmallWidth,
	WPPortalSmallHeight,
	WPPortalSmallWidth,
	WPPortalMDHeight,
	WPPortalMDWidth,
	WPPortalLGHeight,
	WPPortalLGWidth,
	WPPortalXLargeHeight,
	WPPortalXLargeWidth,
	WPPortalFetchPriority,
	WPPortalLoadingOption,
	WPPortalRefererPolicy
} from './defs';
import portalCSS from './style.css';

@customElement(Enums.default.COMPONENT_PREFIX + 'portal')
export class WPPortal extends WPComponentBase {

	@property({ type: String })
	size?: WPSizeableOption;

	@property()
	src?: string;

	@property()
	srcdoc?: string;

	@property()
	name = 'Portal';

	@property()
	scrolling = 'yes';

	@property()
	fetchPriority: WPPortalFetchPriority = 'auto';

	@property()
	loading: WPPortalLoadingOption = 'eager';

	@property()
	refererPolicy: WPPortalRefererPolicy = 'no-referer-when-downgrade';

	@query('iframe')
	frame: HTMLIFrameElement;

	static override styles = [CSS_RESETS, portalCSS];
	connectedCallback() {
		super.connectedCallback();
		document.addEventListener('DOMContentLoaded', () => {

		});
	}

	render() {
		if(this.size === 'xs') {
			return html`
			<iframe
			srcdoc=${ifDefined(this.srcdoc)}
			aria-label=${this.name}
			loading=${this.loading}
			fetchpriority=${ifDefined(this.fetchPriority)}
			name=${this.name}
			width=${WPPortalXSmallWidth}
			height=${WPPortalXSmallHeight}
			src=${ifDefined(this.src)}></iframe>
		`;
		}
		if(this.size === 'sm') {
			return html`
			<iframe
			srcdoc=${ifDefined(this.srcdoc)}
			aria-label=${this.name}
			loading=${this.loading}
			fetchpriority=${ifDefined(this.fetchPriority)}
			name=${this.name}
			width=${WPPortalSmallWidth}
			height=${WPPortalSmallHeight}
			src=${ifDefined(this.src)}></iframe>
		`;
		}

		if(this.size === 'md') {
			return html`
			<iframe
			srcdoc=${ifDefined(this.srcdoc)}
			aria-label=${this.name}
			loading=${this.loading}
			fetchpriority=${ifDefined(this.fetchPriority)}
			name=${this.name}
			width=${WPPortalMDWidth}
			height=${WPPortalMDHeight}
			src=${ifDefined(this.src)}></iframe>
		`;
		}

		if(this.size === 'lg') {
			return html`
			<iframe
			srcdoc=${ifDefined(this.srcdoc)}
			aria-label=${this.name}
			loading=${this.loading}
			fetchpriority=${ifDefined(this.fetchPriority)}
			name=${this.name}
			width=${WPPortalLGWidth}
			height=${WPPortalLGHeight}
			src=${ifDefined(this.src)}></iframe>
		`;
		}

		if(this.size === 'xl') {
			return html`
			<iframe
			srcdoc=${ifDefined(this.srcdoc)}
			aria-label=${this.name}
			loading=${this.loading}
			fetchpriority=${ifDefined(this.fetchPriority)}
			name=${this.name}
			width=${WPPortalXLargeWidth}
			height=${WPPortalXLargeHeight}
			src=${ifDefined(this.src)}></iframe>
		`;
		}

		return html`
		<iframe
		srcdoc=${ifDefined(this.srcdoc)}
		aria-label=${this.name}
		loading=${this.loading}
		fetchpriority=${ifDefined(this.fetchPriority)}
		name=${this.name}
		src=${ifDefined(this.src)}></iframe>
		`;
	}
}
