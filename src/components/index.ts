export * from './btn';
export * from './link';
export * from './container';
export * from './img';
import { WPBtn } from './btn';
import { WPLink } from './link';
import { WPHdr, WPTag, WPTxt } from './container/txt-section';
import { WPImg } from './img';
import { WPLayout, WPFtr, WPNav, WPCard, WPGrid, WPFlex, WPSidebar } from './container';

/**
 * Global Map For Packaged Tags
 */
declare global {
    interface HTMLElementTagNameMap {
		'wp-sidebar': WPSidebar;
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
