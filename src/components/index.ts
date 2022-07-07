export * from './btn';
export * from './txt-section';
export * from './layout';
export * from './link';

import { WPBtn } from './btn';
import { WPLink } from './link';
import {
	WPHdr,
	WPTag,
	WPTxt
} from './txt-section';
/**
 * Global Map For Packaged Tags
 */
declare global {
	interface HTMLElementTagNameMap {
		'wp-btn': WPBtn;
		'wp-txt': WPTxt;
		'wp-hdr': WPHdr;
		'wp-tag': WPTag;
		'wp-link': WPLink;
	}
}
