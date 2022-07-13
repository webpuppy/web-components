export * from './btn';
export * from './link';
export * from './container';
export * from './img';
import { WPBtn } from './btn';
import { WPNav } from './container/nav';
import { WPLink } from './link';
import { WPHdr, WPTag, WPTxt } from './container/txt-section';
import { WPImg } from './img';

/**
 * Global Map For Packaged Tags
 */
declare global {
    interface HTMLElementTagNameMap {
		'wp-nav': WPNav;
        'wp-btn': WPBtn;
        'wp-txt': WPTxt;
        'wp-hdr': WPHdr;
        'wp-tag': WPTag;
        'wp-link': WPLink;
		'wp-img': WPImg;
    }
}
