export * from './btn';
export * from './txt-section';
import { WPBtn } from './btn';
import { WPHdr, WPTag, WPTxt } from './txt-section';
/**
 * Global Map For Packaged Tags
 */
declare global {
    interface HTMLElementTagNameMap {
        'wp-btn': WPBtn;
        'wp-txt': WPTxt;
        'wp-hdr': WPHdr;
        'wp-tag': WPTag;
    }
}
//# sourceMappingURL=index.d.ts.map