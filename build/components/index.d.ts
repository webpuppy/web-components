export * from './btn';
export * from './txt-section';
import { WPTxt } from './txt-section';
import { WPBtn } from './btn';
declare global {
    interface HTMLElementTagNameMap {
        'wp-btn': WPBtn;
        'wp-txt-section': WPTxt;
    }
}
//# sourceMappingURL=index.d.ts.map