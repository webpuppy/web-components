export * from './btn';
export * from './link';
export * from './container';
export * from './img';
export * from './loading';

import { WPBtn } from './btn';
import { WPLink } from './link';
import { WPCode, WPHdr, WPTag, WPTxt } from './container/txt-section';
import { WPImg } from './img';
import {
	WPLayout,
	WPFtr,
	WPNav,
	WPCard,
	WPGrid,
	WPFlex,
	WPSidebar,
	WPSidebarItem,
	WPTextInput,
	WPDateInput,
	WPSection
} from './container';
import { WPLoading } from './loading';

/**
 * Global Map For Packaged Tags
 */
declare global {
    interface HTMLElementTagNameMap {
		'wp-loading': WPLoading;
		'wp-date-input': WPDateInput;
		'wp-text-input': WPTextInput;
		'wp-code-line': WPCode;
		'wp-sidebar-item': WPSidebarItem;
		'wp-sidebar': WPSidebar;
		'wp-section': WPSection
		'wp-flex': WPFlex;
		'wp-grid': WPGrid;
		'wp-card': WPCard;
		'wp-nav': WPNav;
        'wp-btn': WPBtn;
        'wp-txt': WPTxt;
        'wp-hdr': WPHdr;
        'wp-tag': WPTag;
        'wp-link': WPLink;
		'wp-img': WPImg;
		'wp-ftr': WPFtr;
		'wp-layout': WPLayout;
    }
}
