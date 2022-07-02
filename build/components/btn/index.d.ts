import { LitElement } from '../../globals/exports';
import { CBButtonType } from './defs';
export declare class MyBtn extends LitElement {
    use_icon: boolean;
    type: CBButtonType;
    text: string;
    static styles: import("lit").CSSResult[];
    get_icon(): "" | "✓" | "x";
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-btn': MyBtn;
    }
}
//# sourceMappingURL=index.d.ts.map