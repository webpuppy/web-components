export * from './btn';
export * from './link';
export * from './container';
export * from './img';
export * from './loading';
export * from './nav';
export * from './form';
export * from './sidebar';
export * from './ftr';
export * from './tag';
export * from './toast';

import { WPBtn } from './btn';
import { WPLink } from './link';
import { WPImg } from './img';
import { WPNav } from './nav';
import { WPLoading } from './loading';
import { WPFtr } from './ftr';
import {
	WPToaster,
	WPToast
} from './toast';

import {
	WPLayout,
	WPCard,
	WPGrid,
	WPFlex,
	WPSection
} from './container';
import {
	WPSidebar,
	WPSidebarItem,
} from './sidebar';
import {
	WPCode,
	WPTag,
} from './tag';
import {
	WPTextInput,
	WPDateInput
} from './form';
/**
 * Global Map For Packaged Tags
 */
declare global {
    interface HTMLElementTagNameMap {
		'wp-toast': WPToast;
		'wp-toaster': WPToaster;
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
        'wp-tag': WPTag;
        'wp-link': WPLink;
		'wp-img': WPImg;
		'wp-ftr': WPFtr;
		'wp-layout': WPLayout;
    }
}
